import { CommonModule, isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginResposeService } from '../../services/login-respose.service';

@Component({
  selector: 'app-my-purchase',
  imports: [CommonModule,RouterLink],
  templateUrl: './my-purchase.component.html',
  styleUrl: './my-purchase.component.scss'
})
export class MyPurchaseComponent implements OnInit {



  batch_api = "https://mw-learning.up.railway.app/api/student/batchDetails";
  status = "SUCCESS";


  my_purchase = [
    {
      batch_img_link: '', // replace with your correct path
      status: '',
      batchName: '',
      rate: ''
    }
  ];

  http = inject(HttpClient);
  login_ser = inject(LoginResposeService);


  constructor(@Inject(PLATFORM_ID) private platformId: Object){}
    ngOnInit(): void {

       if (isPlatformServer(this.platformId)) {
    // Skip POST during SSR
    return;
  }

         this.my_purchase.shift();
      for(let i=0;i<this.login_ser.student_info.batch_code.length;i++){
        this.http.post<any>(this.batch_api,{batchCode:this.login_ser.student_info.batch_code[i]}).subscribe(res =>{

          this.my_purchase.push(res.data.batch[0])

        })
      }

      console.log("hello");
      console.log(this.my_purchase);
       console.log("hello");
}

openLink(){}

}
