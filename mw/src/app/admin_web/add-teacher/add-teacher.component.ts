import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  imports: [ ReactiveFormsModule,HttpClientModule],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.scss'
})
export class AddTeacherComponent {
  teacherForm: FormGroup;
  api_url = 'https://mw-learning.up.railway.app/api/admin/add_teacher';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.teacherForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      img_link: ['', Validators.required],
      subject: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.teacherForm.valid) {
      this.http.post(this.api_url, this.teacherForm.value)
        .subscribe({
          next: res => alert('Teacher added successfully'),
          error: err => alert('Error: ' + err.message)
        });
    } else {
      alert('Please fill all required fields');
    }
  }
}
