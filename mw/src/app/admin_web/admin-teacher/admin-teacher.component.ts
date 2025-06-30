import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchFilterPipe } from "../../pipe/search-filter.pipe";

@Component({
  selector: 'app-admin-teacher',
  imports: [RouterModule, CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './admin-teacher.component.html',
  styleUrl: './admin-teacher.component.scss'
})
export class AdminTeacherComponent  implements OnInit {

    allTeachersApi = 'https://mw-learning.up.railway.app/api/admin/allTeacher';
    edit= true;
    http = inject(HttpClient);
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
term: any;


    ngOnInit() : void{
        this.http.get(this.allTeachersApi).subscribe((data: any) => {
            console.log(data);
            this.allTeacher = data;
            console.log('Teachers fetched successfully:', this.allTeacher);
        }, (error) => {
            console.error('Error fetching teachers:', error);
        });
    }


    deleteTeacher(_id: string) {
        console.log('Deleting teacher with ID:', _id);
        this.http.delete(`https://mw-learning.up.railway.app/api/admin/delete_teacher`, { body: { _id: _id } }).subscribe((response) => {
            console.log('Teacher deleted successfully:', response);
            // Optionally, refresh the teacher list or remove the deleted teacher from the UI
            this.allTeacher = this.allTeacher.filter(teacher => teacher._id !== _id);
        }, (error) => {
            console.error('Error deleting teacher:', error);
        });
    }

editTeacherId=''
    saveData(object: any) {
      this.edit = !this.edit;
      console.log(object)
      this.http.post('https://mw-learning.up.railway.app/api/admin/editTeacher',object).subscribe(
        {
          next: (res:any ) =>{
            alert(res.message);
          }
          ,

            error: err =>{
              alert(err);
            }

        }
      )

      this.editTeacherId=''
        // return false;
    }
}
