import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-coupons',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-coupons.component.html',
  styleUrl: './add-coupons.component.scss'
})
export class AddCouponsComponent {
http = inject(HttpClient)
coupon_code= "";

onSubmit() {
  console.log({coupon:this.coupon_code.toLowerCase()});
this.http.post("https://mw-learning.up.railway.app/api/admin/add_coupons",{coupon:this.coupon_code.toLowerCase()}).subscribe(

  {next:(res:any)=>{
alert('coupon added')
}
,
error : (err)=>{
if (err.status === 409) {
            alert('coupon already exists ');
          } else {
            alert('Something went wrong: ' + (err.error?.message || err.message));
          }
}

})

}

}
