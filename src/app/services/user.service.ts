import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<string>("acs");
  cast = this.user.asObservable();

  constructor() { }
  
  edit(user){
    this.user.next(user);
  }
}
