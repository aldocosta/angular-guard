import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  user:string;
  modelo:string;
  constructor(private uc:UserService) { }

  ngOnInit() {
    this.uc.cast.subscribe(ret=> 
      {
        this.user = ret;
      });
  }

  doChange(){
    this.uc.edit(this.modelo);
  }

}
