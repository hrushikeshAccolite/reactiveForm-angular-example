import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './typeDefs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  // name = ""

  constructor() { }

  // user : User = {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   address: '123 Main St',
  //   age: 42
  // }

  user = {}

  private userDataBS = new BehaviorSubject<any>(this.user);
  userDataBS$ = this.userDataBS.asObservable();

  public setData(data: any) {
    this.userDataBS.next(data.value);
  }
}
