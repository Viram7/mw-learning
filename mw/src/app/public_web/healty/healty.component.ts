import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';
import { title } from 'node:process';

@Component({

    selector: 'app-healty',
    imports: [CommonModule, RouterLink],
    templateUrl: './healty.component.html',
    styleUrl: './healty.component.scss',
    standalone:true,
    animations: [
        trigger('fadeInAnimation', [
            state('inView', style({
                opacity: 1,
                transform: 'translateY(0)',
            })),
            state('outOfView', style({
                position: 'relative',
                // top: '-100px',
                width: '50%',
                scale: '1.7',
            })),
            transition('outOfView => inView', animate('1s linear')),
            transition('inView => outOfView', animate('1s linear')),
        ]),
    ]
})
export class HealtyComponent implements OnInit {

  
  // @Input() ani_right:string = '';
  @Input() bt_link!:string;
  @Input() ani_left:boolean = false;
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
    img_link: "../../assets/side-effect.png",
  }

  ngOnInit(): void {
   const hide_element = document.querySelectorAll(".hide_right");
    hide_element.forEach(element => {
      if(this.ani_left){
        element.classList.remove('hide_right');
      }else {
        element.classList.remove('hide_left');
      }
    });


    {

    console.log("hy");
    const observer = new IntersectionObserver((entres) => {
      entres.forEach(element => {
        if (element.isIntersecting) {
          element.target.classList.add('show');
        }
        else {
        }
      });
    });

    if(this.ani_left){
      const hide_element = document.querySelectorAll('.hide_left');

      hide_element.forEach((element) => observer.observe(element));
    }
    else {
      const hide_element = document.querySelectorAll('.hide_right');

      hide_element.forEach((element) => observer.observe(element));
    }
  }
  }
}
