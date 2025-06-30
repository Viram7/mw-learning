import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cource-details',
  imports: [NavbarComponent,CommonModule,RouterLink],
  templateUrl: './cource-details.component.html',
  styleUrl: './cource-details.component.scss'
})
export class CourceDetailsComponent {

  courseCards = [
    {
      title: 'Arjuna NEET 2026',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/c89c4a74-374c-44e5-9041-ffe88aa3746a.jpg',
      language: 'Hinglish',
      isNew: true,
      price: 4999,
      originalPrice: 5600,
      discount: '11%',
      startDate: '14 Apr, 2025',
      endDate: '30 Jun, 2027',
      tag: 'ONLINE'
    },
    {
      title: 'Arjuna NEET Hindi 2026',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/0dd907b5-e6cb-4c8d-8bb0-1b7cddf6daee.jpg',
      language: 'Hindi',
      isNew: true,
      price: 3199,
      originalPrice: 5000,
      discount: '36%',
      startDate: '6 May, 2025',
      endDate: '30 Jun, 2027',
      tag: 'ONLINE'
    },
    {
      title: 'Power Batch (Class 11 NEET 2027)',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/0e3c26fa-c4fe-4901-be0e-eef43003b3ac.png',
      language: 'Hinglish',
      isNew: false,
      price: 499,
      originalPrice: null,
      discount: null,
      startDate: '',
      endDate: '',
      tag: 'Hinglish',
      isDark: true
    },
    {
      title: 'Power Batch (Class 11 NEET 2027)',
      image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/0e3c26fa-c4fe-4901-be0e-eef43003b3ac.png',
      language: 'Hinglish',
      isNew: false,
      price: 499,
      originalPrice: null,
      discount: null,
      startDate: '',
      endDate: '',
      tag: 'Hinglish',
      isDark: true
    }
  ];

}
