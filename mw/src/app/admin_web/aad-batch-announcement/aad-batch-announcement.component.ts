import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-aad-batch-announcement',
  imports: [ FormsModule, CommonModule, ReactiveFormsModule,HttpClientModule ],
  templateUrl: './aad-batch-announcement.component.html',
  styleUrl: './aad-batch-announcement.component.scss'
})
export class AadBatchAnnouncementComponent {

  aad_batch_announcement_api = "http://localhost:8000/api/admin/addAnnouncement";

  http = inject(HttpClient);

  batchAnnouncementForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.batchAnnouncementForm = this.fb.group({
      batchCode:['',Validators.required],
      announcement_title: ['', Validators.required],
      announcement_description: ['', Validators.required],

    });
  }

  onSubmit() {
    if (this.batchAnnouncementForm.valid) {

      this.http.post<any>(this.aad_batch_announcement_api, this.batchAnnouncementForm.value).subscribe(
        (        response: any) => {
          console.log('Announcement added successfully:', response);
          alert('Announcement added successfully:')
          // Reset the form or perform any other actions
        },
        (        error: any) => {
          console.error('Error adding announcement:', error);
        }
      );

      console.log('Form Submitted:', this.batchAnnouncementForm.value);
      // API call here 
    } else {
      console.log('Form is invalid');
    }
  }
}
