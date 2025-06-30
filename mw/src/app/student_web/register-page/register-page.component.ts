import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent  {

    registerForm: FormGroup;
    generatedOtp: string = '';
    submitted = false;
    otp :number = 0;
    // entered_otp :string = "";

    api_url = 'http://localhost:8000/api/student/register';

    constructor(private fb: FormBuilder, private http: HttpClient,private router: Router) {
      this.registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        otp: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
      });
    }

    generateOTP() {
      const otp = Math.floor(1000 + Math.random() * 9000); // Generates random 4-digit number
      this.generatedOtp = otp.toString();
      // console.log('Generated OTP:', this.generatedOtp);
      // alert('Your OTP is: ' + this.generatedOtp);
      this.otp = parseInt(this.generatedOtp);
      // alert('Your OTP is: ' + this.otp);
    }

    onSubmit() {
      this.submitted = true;
      if (this.registerForm.valid) {
        if (this.registerForm.value.otp === this.generatedOtp) {
          // console.log('Form Submitted:', this.registerForm.value);
          this.http.post(this.api_url,this.registerForm.value).subscribe({
        next: (res: any) => {
          alert('Registration Successful!');
          this.router.navigate(['/login_page']);
        },
        error: (err) => {
          if (err.status === 409) {
            alert('User already exists with this phone number.');
          } else {
            alert('Something went wrong: ' + (err.error?.message || err.message));
          }
        }
      })

        } else {
          alert('Invalid OTP! Please enter the correct OTP.');
        }
      } else {
        console.log('Form Invalid');
      }
    }





  }


