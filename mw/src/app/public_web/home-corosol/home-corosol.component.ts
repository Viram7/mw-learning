import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-corosol',
  imports: [CommonModule],
  templateUrl: './home-corosol.component.html',
  styleUrl: './home-corosol.component.scss'
})
export class HomeCorosolComponent {
   imageLinks = [
    "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/75aa5319-b058-42b9-8873-25cc9a54665e.webp",
    "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/3c122a7d-5f81-4226-8ec0-61712293d2eb.png",
    "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/b9a60356-8fef-45de-8099-167b76f04331.jpeg"
  ];

}
