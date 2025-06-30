import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-batch',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './input-batch.component.html',
  styleUrl: './input-batch.component.scss'
})
export class InputBatchComponent implements OnInit {
  teacher_api_url = 'https://mw-learning.up.railway.app/api/admin/allTeacher';
  set_batch_api_url = 'https://mw-learning.up.railway.app/api/admin/batchSet';

  stuForOptions = ['JEE', 'NEET', 'CUET', 'Olympiad', 'Board Exam'];
  teacherOptions: string[] = []; // this will be filled dynamically

  temp_teacher: string[] = [];
  temp_stu_for: string[] = [];

  batch = {
    batchName: '',
    batchCode: '',
    startDate: '',
    endDate: '',
    batch_img_link: '',
    batchDescription: {
      title: '',
      description: ''
    },
    rate: '',
    discount: '',
    stu_for: [],
    teacher: []
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.teacher_api_url).subscribe((res) => {
      this.teacherOptions = res.map(t => t.name);
      console.log('Teacher names:', this.teacherOptions);
    });
  }

  onSubmit() {
    console.log(this.batch);
    this.http.post(this.set_batch_api_url, this.batch).subscribe((res) => {
      console.log(res);
      alert('Batch created successfully ');
    });
  }
}
