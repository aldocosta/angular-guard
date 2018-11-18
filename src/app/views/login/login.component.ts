import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

export class Login{
  login:string;
  password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login = new Login();

  constructor(private auths: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  doLogin(){
    console.log(this.login.login+" - " + this.login.password);
    this.auths.login(this.login.login,this.login.password);
    this.router.navigate(["home"]);
  }

}
