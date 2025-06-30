import { ProfileEditComponent } from '../profile-edit/profile-edit.component';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNumComponent } from '../update-num/update-num.component';
import { LoginResposeService } from '../../services/login-respose.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-profile',
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent implements OnInit{



  imagePreview: string | ArrayBuffer | null = null;
  image_upload_api = 'https://mw-learning.up.railway.app/api/student/imageUplaod';
  choose_hide=true;
  Dialog = inject(MatDialog);
  login_ser = inject(LoginResposeService)
  // http = inject(HttpClient)
  constructor(public http :HttpClient){}
  userProfile = {
    _id:this.login_ser.student_info._id,
    img_link: this.login_ser.student_info.img_link, // For the profile image URL or preview
      name:this.login_ser.student_info.name ,
      mobile: this.login_ser.student_info.phoneNumber,
      email: this.login_ser.student_info.email,
      city: this.login_ser.student_info.city,
      state:this.login_ser.student_info.state,

      stream: this.login_ser.student_info.stream,
      exams: this.login_ser.student_info.exam,

    }



   ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.imagePreview= this.userProfile.img_link;
  }

onImageSelected(event: Event): void {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.choose_hide = !this.choose_hide;
      this.imagePreview = reader.result;
      this.http.put(this.image_upload_api,{ "image":this.imagePreview,"_id":this.userProfile._id}).subscribe((res)=>{
        console.log(res);
      })

      console.log(this.imagePreview)
    };
    reader.readAsDataURL(file);
  }
}



openDilog() {
this.Dialog.open(ProfileEditComponent);
}
}
