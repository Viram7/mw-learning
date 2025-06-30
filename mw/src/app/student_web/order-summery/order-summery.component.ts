import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../public_web/navbar/navbar.component';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginResposeService } from '../../services/login-respose.service';

@Component({
  selector: 'app-order-summery',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './order-summery.component.html',
  styleUrl: './order-summery.component.scss',
})
export class OrderSummeryComponent implements OnInit {
  //  batchCode = "";
  all_coupon_api = 'https://mw-learning.up.railway.app/api/student/all_coupons';
  send_batch_api_url = 'https://mw-learning.up.railway.app/api/student/batchDetails';
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private login_ser: LoginResposeService
  ) {}
  coupon = '';
  couponFound = false;
  couponDis = 0;
  donateMW = 10;
  discount = 0;
  totalAmount = 0;
  showInput = false;
  coupons = ['', ''];
  user_num = '';
  batchcode = '';
  buy_batch_api_url = 'https://mw-learning.up.railway.app/api/student/buy_batch';

  item = {
    title: 'IIM Kashipur Scholarship Test',
    price: 999,
    discountPrice: 500,
    descriptionTitle: 'IIM Kashipur Scholarship Test',
    image:
      'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/13ebd632-5415-41d6-85de-f760a295e03e.png', // replace with actual path
  };
  paymentdetails = {
    _id: '',
    phoneNumber: '',
    batchCode: '',
    coupon: '',
    donate: '',
    price: '',
    discount: '',
    totalAmount: '',
    fullTime: '',
    transactionId: '',
  };

  ngOnInit(): void {
    this.http.get<any>(this.all_coupon_api).subscribe((res) => {
      this.coupons = res.map((c: any) => c.coupon_code);
    });

    this.paymentdetails.transactionId = this.generateRandomText();

    this.user_num = this.login_ser.student_info.phoneNumber;

    this.route.queryParams.subscribe((res) => {
      console.log(res['batchCode']);
      let batchCode = res['batchCode'];
      this.batchcode = res['batchCode'];

      this.http
        .post<any>(this.send_batch_api_url, { batchCode })
        .subscribe((res) => {
          console.log(res);
          const batch = res.data.batch[0];

          this.item = {

            title: batch.batchName,
            price: batch.rate,
            discountPrice: batch.rate - batch.discount ,
            image: batch.batch_img_link,
            descriptionTitle: batch.batchDescription.title,
          };
          this.discount = this.item.price-this.item.discountPrice;
          this.totalAmount_fun();
        });
    });
     this.totalAmount_fun();
  }

  showInputfeald() {
    this.showInput = !this.showInput;
  }
  cheakCoupon() {
    this.coupon = this.coupon.toLowerCase();

    if (this.coupons.includes(this.coupon)) {
      this.couponFound = true;
      this.couponDis = parseInt(this.coupon.match(/\d+/)?.[0] || '0', 10);
      this.totalAmount_fun();
    } else {
      this.couponDis = 0;
      this.couponFound = false;
      this.totalAmount_fun();
    }
  }

  totalAmount_fun() {
    const price = Number(this.item.price);
const donate = Number(this.donateMW);
const discount = Number(this.discount);
const coupon = Number(this.couponDis);

this.totalAmount = Math.round(price + donate - discount - coupon);

  }
  payment() {
    this.paymentdetails = {
      _id: this.login_ser.student_info._id,
      phoneNumber: this.login_ser.student_info.phoneNumber,
      batchCode: this.batchcode,
      coupon: this.coupon,
      donate: this.donateMW.toString(),
      price: this.item.price.toString(),
      discount: (this.item.price - this.item.discountPrice).toString(),
      totalAmount: this.totalAmount.toString(),
      fullTime: Date(),
      transactionId: this.paymentdetails.transactionId,
    };
    //

    this.http.post<any>(this.buy_batch_api_url, this.paymentdetails).subscribe({
      next: (res) => {
        console.log('Success:', res);
        this.login_ser.student_info.batch_code.push(this.batchcode)
        alert(res.message);
         print();
        // You can also store the success response if needed
      },
      error: (err) => {
        console.error('Error occurred:', err);
        alert(err.error.message);
        // Store the error message or full error object
        // let errorMessage = err.error?.message || 'Something went wrong!';
      },
    });

    console.log(this.paymentdetails);
  }

  generateRandomText(length: number = 20): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
