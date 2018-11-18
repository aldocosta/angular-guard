import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  user:string;
  constructor(private as:AuthService, private router: Router, private uc:UserService){}

  ngOnInit(){
    this.uc.cast.subscribe(ret=> this.user = ret);
  }

  logOut(){
    this.as.logout();
    console.log('Logout rodado');
    this.router.navigate(['login']);
  }

}
