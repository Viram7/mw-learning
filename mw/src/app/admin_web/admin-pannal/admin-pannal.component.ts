import { AdminChatGroupComponent } from './../admin-chat-group/admin-chat-group.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AdminStudentComponent } from '../admin-student/admin-student.component';
import { AdminBatchComponent } from '../admin-batch/admin-batch.component';
import { AdminTeacherComponent } from '../admin-teacher/admin-teacher.component';
import { ChatGroupComponent } from "../../student_web/chat-group/chat-group.component";
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-admin-pannal',
  imports: [MatListModule,RouterModule,MatTabsModule, CommonModule, ],
  templateUrl: './admin-pannal.component.html',
  styleUrls: ['./admin-pannal.component.scss']
})
export class AdminPannalComponent {
  tab: string = 'dashboard';
}
