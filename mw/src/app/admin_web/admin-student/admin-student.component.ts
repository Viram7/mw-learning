import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchFilterPipe } from "../../pipe/search-filter.pipe";
import { FormsModule } from '@angular/forms';
import { FilterStudentByBatchPipe } from "../../pipe/filter-student-by-batch.pipe";

@Component({
  selector: 'app-admin-student',
  imports: [CommonModule, RouterModule, SearchFilterPipe, FormsModule, FilterStudentByBatchPipe],
  templateUrl: './admin-student.component.html',
  styleUrl: './admin-student.component.scss'
})
export class AdminStudentComponent {

  http = inject(HttpClient);
 students = [{
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
}];
term: any;
term2 :any;
batchCode = [];

  ngOnInit(): void {


        this.http.get(' https://mw-learning.up.railway.app/api/admin/batchCodes ').subscribe((res :any) =>{
          this.batchCode = res.data.batchCodes;
        })

    this.http.get('https://mw-learning.up.railway.app/api/admin/all_student').subscribe((data: any) => {
      console.log(data);
      this.students = data.data;
      console.log('Students fetched successfully:', this.students);
    }, (error) => {
      console.error('Error fetching students:', error);
    });
  }

}
