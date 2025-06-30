import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editbatch',
  imports: [CommonModule,FormsModule],
  templateUrl: './editbatch.component.html',
  styleUrl: './editbatch.component.scss'
})
export class EditbatchComponent {
isEdit: boolean = false;
data = inject(MAT_DIALOG_DATA);
http = inject(HttpClient);

batch = {
  _id: "685532c929a5c9fc7d150361",
  batchName: "java",
  batchCode: "java115",
  rate: "1000",
  discount: "200",
  startDate: "2025-06-13",
  endDate: "2028-07-07",
  studentCount: 3,
  teacher: ['ardha'],
  batchDescription: {
    title: "Mastering Java Programming: From Basics to Advanced",
    description: "This comprehensive Java course is designed to take learners from the fundamentals of programming to building real-world Java applications. You will also explore GUI and database connectivity using Java."
  },
  stu_for: ['NEET', 'NEET'],
  batch_img_link: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA",
  announcements: [],
  __v: 0
};

stuForOptions =  ['JEE', 'NEET', 'CUET', 'Olympiad', 'Board Exam'];
teacherOptions = ['John Doe', 'Jane Smith', 'Dr. Patel']; // You can fetch this list dynamically if needed
teacher_api_url ='http://localhost:8000/api/admin/allTeacher';


ngOnInit():void{
  this.batch = this.data;
      this.http.get<any[]>(this.teacher_api_url).subscribe((res) => {
      this.teacherOptions = res.map(t => t.name);
      console.log('Teacher names:', this.teacherOptions);
    });
}

saveBatch() {
  // Call your API here to save the updated batch info
  console.log("Updated Batch Info:", this.batch);
  this.isEdit = false;
}

}
