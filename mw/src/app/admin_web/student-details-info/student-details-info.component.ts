import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { query } from 'express';

@Component({
  selector: 'app-student-details-info',
  imports: [CommonModule],
  templateUrl: './student-details-info.component.html',
  styleUrl: './student-details-info.component.scss'
})
export class StudentDetailsInfoComponent {

http = inject(HttpClient);
route = inject(ActivatedRoute);
userId= ''
student={
  batch_code: ['web202', 'python101', 'java115', 'css001'],
  city: "Indore",
  email: "kushwahavicky15@gmail.com",
  exam: ['CUET', 'JEE'],
  gender: "Male",
  img_link: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAA",
  name: "viram kushwaha",
  phoneNumber: "9302963149",
  state: "Madhya Pradesh",
  stream: "Arts",
  __v: 0,
  _id: "68552f6557b197cb8c572138"
}

objectKeys = Object.keys;

ngOnInit(): void {
  this.route.queryParams.subscribe((params) => {
    console.log('Query Params:', params);
    this.userId = params['id'];
    console.log('ID:', this.userId);
  });

  this.http.post('https://mw-learning.up.railway.app/api/student/student_profile',{_id:this.userId}).subscribe((data: any) => {
    console.log(data);
    this.student = data.user;
    console.log('Students fetched successfully:', this.student);
  }, (error) => {
    console.error('Error fetching students:', error);
  });

}



goBack() {  window.history.back(); }
}
