import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HomeCorosolComponent } from "../home-corosol/home-corosol.component";
import { CardComponent } from "../card/card.component";
import { CardNextComponent } from "../card-next/card-next.component";
import { ExamCatComponent } from "../exam-cat/exam-cat.component";
import { TrustStudentComponent } from "../trust-student/trust-student.component";
import { ResultBanComponent } from "../result-ban/result-ban.component";
import { StudyResourcComponent } from "../study-resourc/study-resourc.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent, HomeCorosolComponent, CardComponent, CardNextComponent, ExamCatComponent, TrustStudentComponent, ResultBanComponent, StudyResourcComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  pannal_data1 = {
    title: " Bharat’s Trusted & Affordable Educational Platform ",
    sub_title: "",
    decription: "Unlock your potential by signing up with Physics Wallah-The most affordable learning solution",
    btn: "Get Started",
    img_link: "https://static.pw.live/ua/images/hero-student-w.webp",
  }
  pannal_data2 = {
    title: " Join 15 Million students on the app today! ",
    sub_title: "Learn with the international Experts",
    decription: " Lorem ipsum dolor sit, amet consectetur \n adipisicing elit. Pariatur aut veritatis delectus et necessitatibus\n vel optio ad iste ullam similique. Iure qui in delectus eum doloribus mollitia veritatis at odit!",
    btn: "DOWNLOAD NOW",
    img_link: "https://www.pw.live/_next/static/media/download-app-right-image.aaca3c09.webp",
  }

}
