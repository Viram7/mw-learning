import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from 'express';

@Component({
  selector: 'app-update-num',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './update-num.component.html',
  styleUrl: './update-num.component.scss'
})
export class UpdateNumComponent {

Dialog = inject(MatDialog)
  otpForm: FormGroup;
  generatedOtp: string = '';
  submitted = false;
 fb = inject(FormBuilder);
  constructor() {
    this.otpForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    });
  }

  generateOTP() {
    const otp = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
    this.generatedOtp = otp.toString();
    alert(`Your OTP is: ${this.generatedOtp}`);
  }

  onSubmit() {
    this.submitted = true;
    const { phoneNumber, otp } = this.otpForm.value;

    if (otp === this.generatedOtp) {
      alert(`Mobile number ${phoneNumber} updated successfully!`);
      this.Dialog.closeAll();
      
      // Optional: send update to backend here
    } else {
      alert('Invalid OTP! Please try again.');
    }
  }
}



