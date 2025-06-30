import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cource-study',
  imports: [MatTabsModule, CommonModule, HttpClientModule],
  templateUrl: './cource-study.component.html',
  styleUrls: ['./cource-study.component.scss']
})
export class CourceStudyComponent {

  videolist = ['', ''];

  batchCode = "";


  http = inject(HttpClient);
  videoApi = "https://mw-learning.up.railway.app/api/student/video/";
  announcements_api ="https://mw-learning.up.railway.app/api/student/announcement";
  cource_description_api = "https://mw-learning.up.railway.app/api/student/batchDescription";

  cource_description = {
    title: "",
    description: "",
  };
  announcements = [{
    title: "",
    description: "",
    date: ""
  }];

  currentRout = inject(ActivatedRoute);
  // constructor(public currentRout : );

  ngOnInit(): void {


    this.currentRout.queryParams.subscribe((param) => {
      this.batchCode = param['batchCode'];
    });
    this.http.post<any>(`https://mw-learning.up.railway.app/api/student/${this.batchCode}/videoList`, {}).subscribe((res) => {
      this.videolist = res.fileNames;
      console.log(this.videolist);
    });

    this.http.post<any>(this.announcements_api, { batchCode: this.batchCode }).subscribe((res) => {
      this.announcements = res.announcements;
      console.log(this.announcements);

    });

     this.http.post<any>(this.cource_description_api, { batchCode: this.batchCode }).subscribe((res) => {
      this.cource_description = res.batchDescription;
      console.log(this.cource_description);

    });

  }
  changeVideo(fileName: String) {

    console.log("clicked")
    this.videoApi = `https://mw-learning.up.railway.app/api/student/video/${this.batchCode}/${fileName}`;

  }


}
