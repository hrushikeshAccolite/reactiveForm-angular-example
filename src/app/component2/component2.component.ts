import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../typeDefs';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  user = {}
  // user : User = {
  //   firstName: '',
  //   lastName: '',
  //   address: "",
  //   age: 0,
  // }

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.userDataBS$.subscribe(data => {
      this.user = data;
    }
    );
  }


}
