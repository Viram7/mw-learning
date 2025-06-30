import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLogResponseService {
  admin_info= {
  status: false,
  message: "Login failed",
  admin: {
  _id: "",
  name: "",
  email: "",
  phoneNumber: "",
  img_link: ""
  }
}

  constructor() { }
}
