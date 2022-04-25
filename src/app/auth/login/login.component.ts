import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login:Login = {
    email: '',
    password: '',
    agree: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(form:any) {
   //  console.log(form);
    console.log(this.login);
    
  }
}

interface Login  {
  email :string;
  password :string;
  agree:boolean
}