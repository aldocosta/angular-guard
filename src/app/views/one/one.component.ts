import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  user:string;
  constructor(private uc:UserService) { }

  ngOnInit() {
    this.uc.cast.subscribe(ret=> this.user = ret);
  }

}
