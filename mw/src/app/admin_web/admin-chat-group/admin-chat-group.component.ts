import { Dialog } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  Inject,
  PLATFORM_ID,
  ViewChild,
  OnInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { io, Socket } from 'socket.io-client';
import { MatDialog } from '@angular/material/dialog';
import { OpenDpComponent } from '../../student_web/open-dp/open-dp.component';
import { AdminLogResponseService } from '../../services/admin-log-response.service';
import { SearchFilterPipe } from "../../pipe/search-filter.pipe";

@Component({
  selector: 'app-admin-chat-group',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './admin-chat-group.component.html',
  styleUrl: './admin-chat-group.component.scss',
})
export class AdminChatGroupComponent implements OnInit {
  public socket!: Socket;
  chatOnline = false;
  term = '';
  Dialog = inject(MatDialog);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public admin_login_ser: AdminLogResponseService,
    public http: HttpClient
  ) {
    if (
      this.admin_login_ser.admin_info?.admin?._id &&
      isPlatformBrowser(this.platformId)
    ) {
      this.chatOnline = true;
      this.socket = io('https://mw-learning.up.railway.app/', {
        transports: ['websocket'],
        reconnectionAttempts: 5,
      });

      this.socket.on('connect', () => {
        console.log('Connected to server');
      });

      this.socket.on('test', (msg) => {
        console.log('Received message:', msg);
      });

      this.socket.on('connect_error', (err) => {
        console.error('Connection error:', err.message);
      });
    }
  }

  current_batchCode = '';
  chatInputBox = false;
  ChatBoxContainer = true;
  selectedgroup = 0;
  student_profile_api_url = 'https://mw-learning.up.railway.app/api/student/student_profile';

  newMessage = '';
  messages: any[] = [];

  contacts: any[] = [
    {
      name: 'Select group',
      group_img_link: 'https://via.placeholder.com/40',
      batchCode: '',
      createdAt: '',
      members: [],
      lastMessage: '',
      mobNo: 1234567890,
    },
  ];

  selectedContact = this.contacts[0];

  @ViewChild('chatContainer') chatContainer!: ElementRef;

  ngOnInit(): void {
    if (!this.socket) return;

    this.socket.on('receive_group_message', (data) => {
      this.messages.push(data);
      this.updateLastMessages();
    });

    this.socket.on('allChat', (data) => {
      this.messages = data.messages;
      this.updateLastMessages();
    });

    this.http
      .get<any>('https://mw-learning.up.railway.app/api/admin/all_groups')
      .subscribe((res) => {
        this.contacts = res.data;

        this.updateLastMessages();
        console.log('Groups loaded:', this.contacts);
      });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.chatContainer) {
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight;
    }
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    const time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    this.socket.emit('group_message', {
      batchCode: this.current_batchCode,
      user: this.admin_login_ser.admin_info.admin.name,
      phoneno: this.admin_login_ser.admin_info.admin.phoneNumber,
      text: this.newMessage,
      time: time,
    });

    this.newMessage = '';
  }

  changeChatBox(i: number) {
    this.chatInputBox = true;
    this.ChatBoxContainer = true;
    this.selectedContact = this.contacts[i];
    this.current_batchCode = this.selectedContact.batchCode;

    this.socket.emit('join_batch', this.current_batchCode);

  }

  closeChatBoxContainer() {
    this.ChatBoxContainer = !this.ChatBoxContainer;

    if (!this.ChatBoxContainer) {
      for (let member of this.selectedContact.members) {
        if (!member.userId) continue;

        this.http
          .post<any>(this.student_profile_api_url, { _id: member.userId })
          .subscribe((res) => {
            member.name = res.user.name;
          });
      }
    }
  }

  openDp() {
    this.Dialog.open(OpenDpComponent, {
      data: { img_url: this.selectedContact.group_img_link },
    });
  }

  updateLastMessages() {
    for (let contact of this.contacts) {
      const latestMsg = this.messages
        .filter(msg => msg.batchCode === contact.batchCode)
        .sort((a, b) => a.time.localeCompare(b.time))
        .at(-1);

      contact.lastMessage = latestMsg
        ? `${latestMsg.text} (${latestMsg.time})`
        : '';

        console.log(contact.lastMessage)
    }
  }
}
