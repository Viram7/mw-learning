import { CommonModule, isPlatformServer } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-batch-details-sub',
  imports: [RouterLink,CommonModule,HttpClientModule],
  templateUrl: './batch-details-sub.component.html',
  styleUrl: './batch-details-sub.component.scss'
})
export class BatchDetailsSubComponent implements OnInit{
  send_batch_api_url='https://mw-learning.up.railway.app/api/student/batchDetails';
  batchInfo = {
    durationStart: '14 April 2025',
    durationEnd: '30 Jan 2026',
    validity: '30 June 2027',
    features: [
      'Online lectures',
      'DPPs and Test With Solutions'
    ]
  };
  batchCode = {
    batchCode:""
  }
  course ={
    title: 'Arjuna NEET 2026',
    image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/c89c4a74-374c-44e5-9041-ffe88aa3746a.jpg',
    // language: 'Hinglish',
    // isNew: true,
    price: 4999,
    discountPrice: 5600,
    discount: '11%',
    startDate: '14 Apr, 2025',
    endDate: '30 Jun, 2027',
    tag: 'ONLINE',
    isDark: false,
    stu_for:['Beginner', 'Intermediate', 'Advanced'],
  }



  teachers = [
    {
      name: "Samapti Sinha ma'am",
      subject: "Zoology",
      experience: "9+ Years Exp",
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/14d60998-abf0-474b-a051-da57ed829181.png'
    },
    {
      name: "Sudhanshu Kumar sir",
      subject: "Physical Chemistry",
      experience: "9+ Years Exp",
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/8dc2446a-5daa-4e53-b767-ab41d5f07ef2.png'
    },
    {
      name: "Amit Mahajan sir",
      subject: "Chemistry",
      experience: "23+ Years Exp",
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/875d6886-f8d7-461f-acd0-54f3ca24aae5.png'
    },

  ];

  groupedTeachers: any[] = [];
  constructor(private current_router :ActivatedRoute,private http : HttpClient,@Inject(PLATFORM_ID) private platformId: Object)  { }

  ngOnInit(): void {

     if (isPlatformServer(this.platformId)) {
    // Skip POST during SSR
    return;
  }

    this.current_router.queryParams.subscribe((params)=>{
      console.log(params['batchCode']);
      this.batchCode ={
        batchCode: params['batchCode']
      };

      this.http.post<any>(this.send_batch_api_url, this.batchCode).subscribe((res) => {
        console.log(res);
        const batch = res.data.batch[0];
        const teacher = (res.data.allteacher || []).flat();
       // Extract the first batch object

        this.batchInfo = {
          durationStart: batch.startDate.split('T')[0],
          durationEnd: batch.endDate.split('T')[0],
          validity: 'N/A', // If `validity` is missing in backend
          features: [batch.batchDescription.title, batch.batchDescription.description]
        };

        this.course = {
          title: batch.batchName,
          image: batch.batch_img_link,
          price: batch.rate,
          discountPrice: batch.rate - (batch.rate*(batch.discount/100)),
          discount: batch.discount,
          startDate: batch.startDate.split('T')[0],
          endDate: batch.endDate.split('T')[0],
          tag: 'ONLINE',
          isDark: false,
          stu_for: batch.stu_for,

        };
        this.teachers = teacher.map((teacher: { name: any; subject: any; experience: string; img_link: any; })  => ({
          name: teacher.name,
          subject: teacher.subject,
          experience: teacher.experience + ' Years Exp',
          image: teacher.img_link
        }));
        // console.log(this.teachers);

      this.groupTeachers();
      });




    }

)

  }

  groupTeachers() {
    const groupSize = 3;
    for (let i = 0; i < this.teachers.length; i += groupSize) {
      this.groupedTeachers.push(this.teachers.slice(i, i + groupSize));
    }
  }
}
