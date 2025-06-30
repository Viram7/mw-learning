import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from '../../pipe/search-filter.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-stu-batch',
  imports: [CommonModule, FormsModule,SearchFilterPipe,RouterLink,HttpClientModule],
  templateUrl: './stu-batch.component.html',
  styleUrl: './stu-batch.component.scss'
})
export class StuBatchComponent {
  api_url='https://mw-learning.up.railway.app/api/student/allbatch';

  term: any;

  courses = [
    {
      title: 'Online BCA For Dropper JEE Students',
      subtitle: 'Online BCA Degree for Dropper JEE Students',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/c45b53a2-4d7a-4e65-96fb-ef57cb48f6c2.png',
      startDate: '28 Feb, 2025',
      endDate: '16 Dec, 2027',
      batchCode: 'BCA-2025',
      // info: '100K+ | Pay for up to 24 Months! | 3 Years & many more'
    },



  ];
  constructor(private http : HttpClient) { }
  ngOnInit() {
    this.http.get<any []>(this.api_url).subscribe((res)=>{
      console.log(res);
      this.courses = res.map(course => ({
        title: course.batchName,
        subtitle: course.batchDescription.description,
        image: course.batch_img_link,
        startDate: course.startDate.split('T')[0],
        endDate: course.endDate.split('T')[0],
        batchCode: course.batchCode,

    })
    )})
  }

  sendCourceCode(batchCode : string){
    // this.http.post(this.send_batch_api_url, { batchCode }).subscribe((res)=>{
    //   console.log(res);

    // })

  }

}
