import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule,RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent  {


  // @Input() ani_right:string = '';
  @Input() bt_link!:string;

  @Input() img_left: boolean = true;
  @Input() color: string = 'black';
  @Input() back_color: string = '';
  @Input() bt_back_color: string = '#352f28';
  @Input() bt_color: string = 'white';
  @Input() align: string = 'end';
  @Input() btalign: string = '';
  @Input() pannal_data = {
    title: " Healthy Skin using ",
    sub_title: "Learn with the international Experts",
    decription: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur aut veritatis delectus et necessitatibus vel optio ad iste ullam similique. Iure qui in delectus eum doloribus mollitia veritatis at odit!",
    btn: "BOOK NOW",
    img_link: "https://static.pw.live/ua/images/hero-student-w.webp",
  }


}
