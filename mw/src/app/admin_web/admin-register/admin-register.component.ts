


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';





@Component({
  selector: 'app-admin-register',
  imports: [CommonModule,FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent {

  adminForm: FormGroup;
  responseMessage: string = '';
  isError: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.adminForm = this.fb.group({
      img_link: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.adminForm.invalid) return;
    console.log(this.adminForm.value);

    this.http.post<any>('https://mw-learning.up.railway.app/api/admin/register', this.adminForm.value ).subscribe({
      next: (res) => {
        this.responseMessage = res.message;
        alert(this.responseMessage);
        this.isError = false;
        this.adminForm.reset();
      },
      error: (err) => {
        this.responseMessage = err.error?.message || 'Something went wrong';
        this.isError = true;
      }
    });
  }
}
