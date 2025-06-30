import { Dialog } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, inject, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { io, Socket } from 'socket.io-client';
import { LoginResposeService } from '../../services/login-respose.service';
import { MatDialog } from '@angular/material/dialog';
import { OpenDpComponent } from '../open-dp/open-dp.component';
import { SearchFilterPipe } from "../../pipe/search-filter.pipe";


@Component({
  selector: 'app-chat-group',
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './chat-group.component.html',
  styleUrl: './chat-group.component.scss'
})
export class ChatGroupComponent implements OnInit {
  public socket!: Socket;
  chatOnline = false;
  term:any;
  Dialog=inject(MatDialog);
  constructor(@Inject(PLATFORM_ID) private platformId: Object, public login_ser: LoginResposeService, public http: HttpClient) {
    this.chatOnline = true;
    if (login_ser.student_info._id != '' && this.chatOnline == true) {
      if (isPlatformBrowser(this.platformId)) {
        this.socket = io('http://localhost:8000', {
          transports: ['websocket'],
          reconnectionAttempts: 5
        });

        this.socket.on('connect', () => {
          console.log('Connected to server');
        });

        this.socket.on('test', (msg) => {
          console.log('Received message:', msg);
        })

        //  this.socket.on('allChat', (data) => {
        //   // console.log('All chat messages:', data);
        //   this.messages = data.messages
        //   console.log('all chats ', this.messages);
        // });

        this.socket.on('connect_error', (err) => {
          console.error('Connection error:', err.message);
        });

      }
    }


  }


current_batchCode='';
chatInputBox=false;
ChatBoxContainer =true;
selectedgroup = 0;
  student_profile_api_url = 'http://localhost:8000/api/student/student_profile';


  newMessage = '';
  messages = [
    { user: 'mathwala', text: 'wellcome to mathwala', phoneno: 'other', time: '13:00' },

  ];

  contacts = [
    {
      name: 'select group',
      group_img_link: 'https://via.placeholder.com/40',
      batchCode:'',
      createdAt:'',
      members:[
        {
          userId:'',
          _id:'',
          joinedAt:'',
          name:''
        }
      ],
      lastMessage: 'hy',
      mobNo: 1234567890,
    },

  ];

  selectedContact = this.contacts[0];

  @ViewChild('chatContainer') chatContainer!: ElementRef;

  sendMessage() {
    if (!this.newMessage.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });




    this.socket.emit('group_message', {
      batchCode: this.current_batchCode,
      user: this.login_ser.student_info.name,
      phoneno: this.login_ser.student_info.phoneNumber,
      text: this.newMessage,
      time: time
    });



    this.newMessage = '';


  }


  ngOnInit(): void {
    // this.http.post();
    if (!this.socket) return;
     this.contacts.push();

    this.socket.on('receive_group_message', (data) => {
  console.log('Group message:', data);
  this.messages.push(data); // show in chat window
});

   this.socket.on('allChat', (data) => {
          this.messages = data.messages;
          console.log(this.messages);
        })


    this.http.post<any>("http://localhost:8000/api/student/all_groups", { batchCode: this.login_ser.student_info.batch_code }).subscribe(res => {



      this.contacts = res;


      console.log(this.contacts,'hy');



    })

  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.chatContainer) {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    }
  }
  changeChatBox(i: number) {

    console.log(i);
    this.chatInputBox =true;
    this.ChatBoxContainer = true;

    this.selectedContact = this.contacts[i];

    this.current_batchCode =this.selectedContact.batchCode;

    this.socket.emit('join_batch', this.contacts[i].batchCode);

  }


  closeChatBoxContainer(){
    this.ChatBoxContainer = !this.ChatBoxContainer;
    if(!this.ChatBoxContainer){
      this.selectedContact.members.push();
      // this.selectedContact.members
      for(let member of this.selectedContact.members){
        console.log(member._id)
         this.http.post<any>(this.student_profile_api_url,{_id:member.userId}).subscribe(res=>{
          member.name = res.user.name;
         })
      }

    }
  }

  openDp(){
    this.Dialog.open(OpenDpComponent,{
      data: { img_url:this.selectedContact.group_img_link },
    });
  }


}
