import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginResposeService {

  student_info: {_id:string ; batch_code: any[]; email: string; name: string; phoneNumber: string ;img_link :string;city : string ; state : string ;stream :string;exam :any[];gender :string; } = {
  _id : '',
    batch_code: [],
  email: '',
  name: '',
  phoneNumber: '',
  img_link: '',
  city: '',
  state: '',
  stream: '',
  exam: [],
  gender :'',

  };
  constructor() { }
 
}
