import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { BatchDetailsSubComponent } from "../../student_web/batch-details-sub/batch-details-sub.component";

@Component({
  selector: 'app-batch-details',
  imports: [NavbarComponent, CommonModule, FooterComponent, BatchDetailsSubComponent],
  templateUrl: './batch-details.component.html',
  styleUrl: './batch-details.component.scss'
})
export class BatchDetailsComponent  {


}
