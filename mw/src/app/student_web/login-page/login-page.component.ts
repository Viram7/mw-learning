import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginResposeService } from '../../services/login-respose.service';


@Component({
  selector: 'app-login-page',
  imports: [CommonModule,ReactiveFormsModule,RouterLink ,HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  step: 'mobile' | 'otp' = 'mobile';
  mobileForm: FormGroup;
  otpForm: FormGroup;
process =false;
  constructor(private fb : FormBuilder,private router : Router,private http : HttpClient,private login_ser : LoginResposeService) {
    this.mobileForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern('^\\d{6}$')]]
    });
  }


  submitMobile() {
    this.process = true;
    if (this.mobileForm.valid) {
      // simulate sending OTP
      console.log('Sending OTP to:', this.mobileForm.value,typeof(this.mobileForm.value));
      this.http.post('https://mw-learning.up.railway.app/api/student/login',this.mobileForm.value).subscribe((res :any)=>{


        this.login_ser.student_info = res.data[0];

        // console.log(this.login_ser.student_info);
        console.log(res);
        if(res.status == true){
          this.process = false;
          this.step = 'otp';
        }else{
          alert(res.message);
        }

      })

    }
  }

  submitOtp() {
    if (this.otpForm.valid) {
      this.router.navigate(['/stu_home']);
      this.process = true;
      // proceed with login logic
    }
  }

  goBack() {
    this.step = 'mobile';
    this.otpForm.reset();
  }

}
