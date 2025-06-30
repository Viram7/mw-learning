import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-result-ban',
  imports: [CommonModule],
  templateUrl: './result-ban.component.html',
  styleUrl: './result-ban.component.scss'
})
export class ResultBanComponent {
   imageLinks = [
    "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/d9c749b6-2e60-4ef4-8cb0-1c4d056dcec1.webp",
    "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/664fccf5-80c4-49e4-b335-c5a9eb08d418.jpeg",
    "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/3a619538-f60e-4260-9c51-80b8c358e235.jpg"
  ];

}
