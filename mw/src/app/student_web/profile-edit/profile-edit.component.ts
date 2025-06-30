import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNumComponent } from '../update-num/update-num.component';
import { LoginResposeService } from '../../services/login-respose.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profile-edit',
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss'
})
export class ProfileEditComponent implements OnInit {




  Dialog = inject(MatDialog);
  login_ser = inject(LoginResposeService);
  http = inject(HttpClient)
  updaTe_api_url = 'https://mw-learning.up.railway.app/api/student/update';
  temp_exam_value = ""
temp_exam_arr = [""];
hide_exam_chosse = false;

  user = {
    _id:'userid',
    gender: 'Male',
    batch_code: ["sdnc","hsdkckb"],
    email: 'ajay@gmail.com',
    name: 'ajay',
    phoneNumber: '09897868',
    img_link: '',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    stream: '',
    exam: ["gate"]
  };


//   states = [
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chhattisgarh",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Odisha",
//   "Punjab",
//   "Rajasthan",
//   "Sikkim",
//   "Tamil Nadu",
//   "Telangana",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
//   "West Bengal",
//   "Andaman and Nicobar Islands",
//   "Chandigarh",
//   "Dadra and Nagar Haveli and Daman and Diu",
//   "Delhi",
//   "Lakshadweep",
//   "Puducherry"
// ];

  // cities = ['Bhopal', 'Indore', 'Mumbai', 'Ahmedabad'];


  streams = ['Science', 'Commerce', 'Arts', 'Maths'];
  exams = ['JEE', 'NEET', 'CUET', 'Olympiad', 'Board Exam'];


   citiesByState: { [key: string]: string[] } = {
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
    "Uttar Pradesh": ["Lucknow", "Noida", "Varanasi", "Allahabad", "Agra"],
    "Tamil Nadu": ["Chennai", "Trichy", "Madurai", "Erode", "Coimbatore"],
    "Karnataka": ["Bengaluru", "Mysuru", "Davangere", "Mangalore", "Hubli"]
    // Add more here
  };

  states: string[] = Object.keys(this.citiesByState);
  selectedState: string = '';
  cities: string[] = [];
  selectedCity: string = '';

  onStateChange() {
    console.log('change state')
    this.selectedState = this.user.state;
    this.cities = this.citiesByState[this.user.state] || [];
    this.selectedCity = '';
  }


  ngOnInit(): void {

    this.user ={
      _id : this.login_ser.student_info._id,
      gender: this.login_ser.student_info.gender,
      batch_code: this.login_ser.student_info.batch_code,
      email: this.login_ser.student_info.email,
      name: this.login_ser.student_info.name,
      phoneNumber:this.login_ser.student_info.phoneNumber,
      img_link: this.login_ser.student_info.img_link,
      city: this.login_ser.student_info.city,
      state: this.login_ser.student_info.state,
      stream: this.login_ser.student_info.stream,
      exam: this.login_ser.student_info.exam
    }
    this.temp_exam_arr = this.login_ser.student_info.exam;

    console.log("hy");
    console.log(this.user)


  }


  removeExam(e:string){

    this.temp_exam_arr = this.temp_exam_arr.filter(exam => exam !== e);


  }


   append_exam(exam:string){
    console.log(exam)
    // this.temp_exam_arr = []
    if(!this.temp_exam_arr.includes(exam)){
      this.temp_exam_arr.push(exam);}
  }

  updateDetails() {

    this.user.exam = this.temp_exam_arr;
    console.log('Updated User Details:', this.user);
    // You can also close the modal here

  this.http.put<any> (this.updaTe_api_url,this.user).subscribe((res)=>{
    // console.log(res.status);
    alert("profile updated");
    this.login_ser.student_info = this.user;
    this.Dialog.closeAll();
   })

  }

  updateMobile() {
    // alert('Mobile number update functionality triggered!');
    this.Dialog.closeAll();
    this.Dialog.open(UpdateNumComponent)

  }




  closeModal() {



    this.Dialog.closeAll();

    // Close modal logic (depends on how you open modal: Bootstrap Modal, Angular Modal, etc.)
    // console.log('Modal Closed');
  }





}

