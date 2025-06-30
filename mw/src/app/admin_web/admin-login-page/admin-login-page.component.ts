import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AdminLogResponseService } from '../../services/admin-log-response.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login-page',
  imports: [CommonModule,RouterModule ,FormsModule],
  templateUrl: './admin-login-page.component.html',
  styleUrl: './admin-login-page.component.scss'
})
export class AdminLoginPageComponent {

  admin_login_res = inject(AdminLogResponseService);
  http = inject(HttpClient);
  route = inject(Router);
process = false;
 user = {
    email: 'vinnu@gmail.com',
    password: '111111'
  };

  onSubmit(form: NgForm) {
    this.process = true;
    if (form.valid) {
      console.log('Login Data:', this.user);

      this.http.post('https://mw-learning.up.railway.app/api/admin/login', this.user).subscribe({
        next: (response) => {
          console.log('Login successful:', response);

          this.admin_login_res.admin_info = response as any;

          this.route.navigate(['/admin_pannal'],{queryParams: { _id: this.admin_login_res.admin_info.admin._id }});
        },
        error: (error) => {
          alert('Login failed: ' + error.message);
        }
      });

    } else {
      console.log('Form is invalid');
    }
  }
}
