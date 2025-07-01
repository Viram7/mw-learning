import { Routes } from '@angular/router';
import { HomePageComponent } from './public_web/home-page/home-page.component';
import { NavbarComponent } from './public_web/navbar/navbar.component';
import { HomeCorosolComponent } from './public_web/home-corosol/home-corosol.component';
import { CourceDetailsComponent } from './public_web/cource-details/cource-details.component';
import { BatchDetailsComponent } from './public_web/batch-details/batch-details.component';
import { LoginPageComponent } from './student_web/login-page/login-page.component';
import { OrderSummeryComponent } from './student_web/order-summery/order-summery.component';
import { StuHomeComponent } from './student_web/stu-home/stu-home.component';
import { StuStudyComponent } from './student_web/stu-study/stu-study.component';
import { StuBatchComponent } from './student_web/stu-batch/stu-batch.component';
import { StuContactComponent } from './student_web/stu-contact/stu-contact.component';
import { MyProfileComponent } from './student_web/my-profile/my-profile.component';
import { MyPurchaseComponent } from './student_web/my-purchase/my-purchase.component';
import { MyBatchComponent } from './student_web/my-batch/my-batch.component';
import { CourceStudyComponent } from './student_web/cource-study/cource-study.component';
import { BatchDetailsSubComponent } from './student_web/batch-details-sub/batch-details-sub.component';
import { RegisterPageComponent } from './student_web/register-page/register-page.component';
import { InputBatchComponent } from './admin_web/input-batch/input-batch.component';
import { AddTeacherComponent } from './admin_web/add-teacher/add-teacher.component';
import { UploadBatchVideoComponent } from './admin_web/upload-batch-video/upload-batch-video.component';
import { StudyResourcComponent } from './public_web/study-resourc/study-resourc.component';
import { AadBatchAnnouncementComponent } from './admin_web/aad-batch-announcement/aad-batch-announcement.component';
import { ChatGroupComponent } from './student_web/chat-group/chat-group.component';
import { ChatGroupTestComponent } from './student_web/chat-group-test/chat-group-test.component';
import { AddCouponsComponent } from './admin_web/add-coupons/add-coupons.component';
import { AdminDashboardComponent } from './admin_web/admin-dashboard/admin-dashboard.component';
import { AdminLoginPageComponent } from './admin_web/admin-login-page/admin-login-page.component';
import { AdminPannalComponent } from './admin_web/admin-pannal/admin-pannal.component';
import path from 'path';
import { AdminStudentComponent } from './admin_web/admin-student/admin-student.component';
import { AdminTeacherComponent } from './admin_web/admin-teacher/admin-teacher.component';
import { AdminBatchComponent } from './admin_web/admin-batch/admin-batch.component';
import { AdminChatGroupComponent } from './admin_web/admin-chat-group/admin-chat-group.component';
import { StudentDetailsInfoComponent } from './admin_web/student-details-info/student-details-info.component';
import { AdminRegisterComponent } from './admin_web/admin-register/admin-register.component';



export const routes: Routes = [

  // {path:'',redirectTo:'home_page',pathMatch:'full'},

  {path:'',component:HomePageComponent},

  {path:'home_page',component:HomePageComponent},
  {path:'cource_details',component:CourceDetailsComponent},
  {path:'batch_details',component:BatchDetailsComponent},
  {path:'login_page',component:LoginPageComponent},
  {path:'register_page',component:RegisterPageComponent},
  {path:'order_summery',component:OrderSummeryComponent},
  {path:'input_batch',component:InputBatchComponent},
  {path:'admin_dashboard',component:AdminDashboardComponent},
  {path:'admin_login_page',component:AdminLoginPageComponent},
  {path:'admin_register_page',component:AdminRegisterComponent},

  {path:'admin_pannal',component:AdminPannalComponent,


    children:[
      {path:'',redirectTo:'admin_dashboard',pathMatch:'full'},
      {path:'admin_dashboard',component:AdminDashboardComponent},
      {path:'admin_input_batch',component:InputBatchComponent},
      {path:'admin_students',component:AdminStudentComponent},
      {path:'admin_batches',component:AdminBatchComponent},
      {path:'admin_teachers',component:AdminTeacherComponent},
      {path:'admin_chat_group',component:AdminChatGroupComponent},

      {path:'admin_add_teacher',component:AddTeacherComponent},
      {path:'upload_batch_video',component:UploadBatchVideoComponent},
      {path:'add_batch_announcement',component:AadBatchAnnouncementComponent},
      {path:'add_coupons',component:AddCouponsComponent},
      {path:'student_details_info',component:StudentDetailsInfoComponent},


  ]},




  {path:'stu_home',component:StuHomeComponent,
    children:[

      {path:'',redirectTo:'stu_study',pathMatch:'full'},
      {path:'stu_study',component:StuStudyComponent},
      {path:'stu_batch',component:StuBatchComponent},
      {path:'stu_contact',component:StuContactComponent},
      {path:'my_profile',component:MyProfileComponent},
      {path:'my_purchase',component:MyPurchaseComponent},
      {path:'my_batch',component:MyBatchComponent},
      {path:'cource_study',component:CourceStudyComponent},
      {path:'batch_details_sub',component:BatchDetailsSubComponent},
      {path:'order_summery',component:OrderSummeryComponent},
      {path:'chat_group',component:ChatGroupComponent},


    ]
  },

];
