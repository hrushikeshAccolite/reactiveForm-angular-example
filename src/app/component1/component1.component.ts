import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../typeDefs';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {

  // name = new FormControl('');
  // user : User = {
  //   firstName: '',
  //   lastName: '',
  //   address: "",
  //   age: 0,
  // }
  constructor(private testService: TestService, private fb: FormBuilder) { }


  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    userType: [''],
    address: [''],
    age: 0
  })

  ngOnInit(): void {
  }

  passData(){
    this.testService.setData(this.userForm);
    // console.log(this.name.value);

    console.log(this.userForm.value);

  }

  updateData(){
    this.testService.setData(this.userForm);
    this.userForm.patchValue({
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      address: this.userForm.value.address,
      age: this.userForm.value.age
    })
  }

}
