import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-batch-video',
  imports: [HttpClientModule,FormsModule],
  templateUrl: './upload-batch-video.component.html',
  styleUrl: './upload-batch-video.component.scss'
})
export class UploadBatchVideoComponent {

  selectedFile!: File;
  batchCode = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadVideo() {
    const formData = new FormData();
    formData.append('video', this.selectedFile);
    // formData.append('batchCode', this.batchCode); // Add batchCode to FormData


    this.http.post<any>(`https://mw-learning.up.railway.app/api/admin/upload-video/${this.batchCode}`, formData).subscribe({
      next: (res: any) => {
      console.log('Upload success:');
      alert(`Video uploaded to batch: ${this.batchCode +" "+ res.message} `);
      },
      error: (err: any) => console.error('Upload error:', err),
    });
  }

}
