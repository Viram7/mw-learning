import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginResposeService } from '../../services/login-respose.service';
import { log } from 'node:console';

@Component({
  selector: 'app-stu-navbar',
  imports: [RouterLink],
  templateUrl: './stu-navbar.component.html',
  styleUrl: './stu-navbar.component.scss'
})
export class StuNavbarComponent implements OnInit {


profile_img="";
 user: { batch_code: any[]; email: string; name: string; phoneNumber: string } = {
  batch_code: [],
  email: "kus",
  name: "vir",
  phoneNumber: "93029"
 };

  constructor(public login_ser : LoginResposeService) {

   }



  ngOnInit(): void {
    this.profile_img = this.login_ser.student_info.img_link;
    console.log("sru nav");
    console.log(this.login_ser.student_info);
    console.log("sru nav")
    this.user = this.login_ser.student_info;
    console.log(this.user.name);
  }



  // Add any necessary logic or methods for the component here
  // For example, you might want to handle user authentication, navigation, etc.
  // You can also use Angular services to manage state or data if needed.

}
