import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StuNavbarComponent } from '../stu-navbar/stu-navbar.component';

@Component({
  selector: 'app-stu-home',
  imports: [MatListModule,RouterOutlet,RouterLink,StuNavbarComponent],
  templateUrl: './stu-home.component.html',
  styleUrl: './stu-home.component.scss'
})
export class StuHomeComponent {

}
