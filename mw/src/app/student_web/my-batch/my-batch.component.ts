import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoginResposeService } from '../../services/login-respose.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-batch',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './my-batch.component.html',
  styleUrl: './my-batch.component.scss'
})
export class MyBatchComponent implements OnInit {

  all_batch_api_url = 'https://mw-learning.up.railway.app/api/student/allbatch'

  selectedType = 'Paid'; // 'Paid' or 'Free'
  selectedTab = 'All'; // 'All' or 'Expired'
  current_student_batches : any;

  all_batches =[{
    _id: "681274538507243b6cdfade2",
    batchName: "Full Stack Web Development",
    batchCode: "FSWD2025SPRING",
    startDate: "2025-05-01T00:00:00.000Z",
    endDate: "2025-08-31T00:00:00.000Z",
    batch_img_link: "https://example.com/path/to/image.png",
    rate: "15,000",
    batchDescription: {
      title: "Become a Full Stack Developer",
      description: "This batch covers front-end and back-end development including HTML, CSS, JavaScript, React, Node.js, MongoDB, and more."
    },
    stu_for: ["beginners", "developers", "students"],
    teacher: [],
    __v: 0,

    status:"",
    type:"",
    language:"",
    isNew:true,


  }]



  batches = [

    {
      title: 'BARC 2024 Question Practice',
      type: 'Paid',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/0df789ce-e950-45cb-9bf6-eeffd5ec47f7.png',
      language: 'Hinglish',
      isNew: true,
      expired: true
    },
    {
      title: 'Post GATE 2024 Guidance',
      type: 'Free',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/f9b36be1-c8b6-4071-8703-ab743ce242b6.jpg',
      language: 'Hinglish',
      isNew: true,
      expired: true
    }
  ];

  constructor (private router: Router,private route :ActivatedRoute,private login_ser : LoginResposeService,private http : HttpClient) { }

  ngOnInit(): void {
    this.current_student_batches = this.login_ser.student_info.batch_code;

    this.http.get<any []>(this.all_batch_api_url).subscribe((res)=>{


       this.all_batches = res.map(batch => {
        const today = new Date();
        const endDate = new Date(batch.endDate);
        const status = endDate < today ? 'Expired' : 'Active';
        const type = batch.rate == 0 ? 'Free' : 'Paid';
        let language = 'Hinglish';
        let diffInDays = Math.floor((today.getTime() - new Date(batch.startDate).getTime()) / (1000 * 60 * 60 * 24));
        let isNew = diffInDays <= 10 && diffInDays >= 0;
        return {
          ...batch,
          status,
          type,
          language,
          isNew
        };
      });


      console.log(this.all_batches);

    })


    }

  filteredBatches() {




    return this.all_batches.filter(batch =>
      batch.type === this.selectedType &&
      (this.selectedTab === 'All' || (this.selectedTab === 'Expired' && batch.status === 'Expired' )) &&
      this.current_student_batches.includes(batch.batchCode)
    );
  }



  openBatch(batchCode :string){

    this.router.navigate(['../cource_study'],{queryParams:{batchCode :batchCode} ,relativeTo: this.route})

  }
}
