import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exam-cat',
  imports: [CommonModule,RouterLink],
  templateUrl: './exam-cat.component.html',
  styleUrl: './exam-cat.component.scss'
})
export class ExamCatComponent {

  categories = [
    {
      title: 'NEET',
      tags: ['class 11', 'class 12', 'Dropper']
    },
    {
      title: 'IIT JEE',
      tags: ['class 11', 'class 12', 'Dropper']
    },
    {
      title: 'School Preparation',
      tags: ['class 6', 'class 7', 'class 8', 'More']
    },
    {
      title: 'UPSC',
      tags: []
    },
    {
      title: 'Govt Job Exams',
      tags: ['SSC', 'Banking', 'Teaching', 'Judiciary']
    },
    {
      title: 'Defence',
      tags: ['NDA', 'CDS', 'AFCAT', 'Agniveer']
    }
  ];

}
