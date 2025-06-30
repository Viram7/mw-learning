import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SearchFilterPipe } from "../../pipe/search-filter.pipe";
import { RecommendationFilterPipe } from '../../pipe/recommendation-filter.pipe';
import { LoginResposeService } from '../../services/login-respose.service';

@Component({
  selector: 'app-stu-study',
  imports: [CommonModule, RouterLink, HttpClientModule,RecommendationFilterPipe],
  templateUrl: './stu-study.component.html',
  styleUrl: './stu-study.component.scss'
})
export class StuStudyComponent {



  api_url='http://localhost:8000/api/student/allbatch';



  constructor(private router: Router,private route :ActivatedRoute,private http : HttpClient,private login_ser : LoginResposeService) { }
  current_student_exams: any;
  current_student_buyed_batch : any;

  courses = [
    {
      title: 'Online BCA For Dropper JEE Students',
      subtitle: 'Online BCA Degree for Dropper JEE Students',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/c45b53a2-4d7a-4e65-96fb-ef57cb48f6c2.png',
      startDate: '28 Feb, 2025',
      endDate: '16 Dec, 2027',
      batchCode: 'BCA-2025',
      stu_for:[""],
      // info: '100K+ | Pay for up to 24 Months! | 3 Years & many more'
    },



  ];

  quickAccessItems = [
    {
      title: 'My Batches',
      description: 'View list of batches in which you are enrolled',
      icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/f145607d-ce81-4512-a415-482360e74bd1.png',
      link: 'my_batch'
    },
       {
      title: 'Groups',
      description: 'View list of groups you are a part of',
      icon: 'https://cdn-icons-png.freepik.com/512/3280/3280979.png?ga=GA1.1.2053484477.1745645088',
      link: 'chat_group'
    },
    // {
    //   title: 'My History',
    //   description: 'View your recent learning here',
    //   icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/d5250d2e-e8b0-43f8-bb6f-91c21d97f51a.png',
    //   link: '/my-history'
    // },
    // {
    //   title: 'My Doubts',
    //   description: 'View the list of your asked doubts',
    //   icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/e9d63833-cd40-4b98-ac8d-d51f30b4766e.png',
    //   link: '/my-doubts'
    // },
    // {
    //   title: 'Dashboard',
    //   description: 'Track your progress through detailed performance',
    //   icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/ebaf9d40-6e18-4fd5-87e7-bfd03bc7c7b7.png',
    //   link: '/dashboard'
    // },
    // {
    //   title: 'Bookmarks',
    //   description: 'View the list of your saved questions',
    //   icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/d1d0061b-8499-4386-9e39-b93b7393343b.svg',
    //   link: '/bookmarks'
    // }
  ];



  navigate(link: string) {
    this.router.navigate(['../' + link], { relativeTo: this.route });
  // this.router.navigate([link]);
  }


  // constructor() { }
  ngOnInit() {

    this.current_student_exams = this.login_ser.student_info.exam ;
    this.current_student_buyed_batch = this.login_ser.student_info.batch_code ;
    this.fatch_api();

  }

  fatch_api(){
    this.http.get<any []>(this.api_url).subscribe((res)=>{
      console.log(res);

      this.courses = res.map(course => ({

        title: course.batchName,
        subtitle: course.batchDescription.description,
        image: course.batch_img_link,
        startDate: course.startDate.split('T')[0],
        endDate: course.endDate.split('T')[0],
        batchCode: course.batchCode,
        stu_for:course.stu_for,

    })
    )})
  }

  sendCourceCode(batchCode : string){
    // this.http.post(this.send_batch_api_url, { batchCode }).subscribe((res)=>{
    //   console.log(res);

    // })

  }
}

