import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditbatchComponent } from '../editbatch/editbatch.component';
import { SearchFilterPipe } from "../../pipe/search-filter.pipe";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-admin-batch',
  imports: [RouterModule, CommonModule, SearchFilterPipe,FormsModule],
  templateUrl: './admin-batch.component.html',
  styleUrls: ['./admin-batch.component.scss']
})
export class AdminBatchComponent {

  http = inject(HttpClient);
  Dialog = inject(MatDialog);
  term:any;

   allTeacher =[
       {
    _id: "6812828f8fefa5ec47125d7c",
    name: "Dr. Ayesha Kapoor",
    email: "ayesha.kapoor@example.com",
    phoneNumber: "+91 9876543210",
    img_link: "https://i.imgur.com/8Km9tLL.jpg",
    subject: "Physics",
    experience: "7",
    __v: 0
  },
    ]

  data={
       studentCounts: [
      {
        "studentCount": 1,
        "batchCode": "web202"
      },
        {
        "studentCount": 3,
        "batchCode": "java115"
      },
    ],
      batches: [
      {
        batchDescription: {
          title: "Mastering Java Programming: From Basics to Advanced",
          description: "This comprehensive Java course is designed to take learners from the fundamentals of programming to building real-world Java applications. Whether you're a complete beginner or looking to strengthen your coding skills, this course provides hands-on experience with core Java concepts, object-oriented programming (OOP), data structures, exception handling, file I/O, and Java APIs.\n\nStudents will build console applications, understand the basics of backend development, and explore GUI and database connectivity using Java."
        },
        _id: "685532c929a5c9fc7d150361",
        batchName: "java",
        batchCode: "java115",
        startDate: "2025-06-13T00:00:00.000Z",
        endDate: "2028-07-07T00:00:00.000Z",
        batch_img_link:"",
        rate: "1000",
        discount: "200",
        studentCount: 3,
        stu_for: [
          "NEET",
          "NEET"
        ],
        teacher: [
          "ardha"
        ],
        announcements: [],
        __v: 0
      }
    ]
  }




  ngOnInit(): void {

    this.http.get('http://localhost:8000/api/admin/allTeacher').subscribe((data: any) => {
            console.log(data);
            this.allTeacher = data;
            console.log('Teachers fetched successfully:', this.allTeacher);
        }, (error) => {
            console.error('Error fetching teachers:', error);
        });

    this.http.get('http://localhost:8000/api/admin/all_batch').subscribe((data: any) => {

        this.data = data.data;
            this.data.batches.forEach(batch => {
  const match = this.data.studentCounts.find(sc => sc.batchCode === batch.batchCode);
  if (match) {
    batch.studentCount = match.studentCount;
    console.log(`Batch ${batch.batchCode} has ${batch.studentCount} students.`);
  }
});
      console.log('Batch data fetched successfully:', this.data);


    }, (error) => {
      console.error('Error fetching batch data:', error);
    });





  }


  deleteBatch(_id:string){
    console.log('Deleting batch with ID:', _id);
    this.data.batches.pop();
    this.http.delete(`http://localhost:8000/api/admin/delete_batch`,{body:{_id:_id}}).subscribe((response) => {
      console.log('Batch deleted successfully:', response);
      this.data
      // Optionally, refresh the batch list or remove the deleted batch from the UI
    }, (error) => {
      console.error('Error deleting batch:', error);
    });
  }

  openEditDialog(object:any){
    console.log(object)
    this.Dialog.open(EditbatchComponent,{
      data:object
    })
  }



}
