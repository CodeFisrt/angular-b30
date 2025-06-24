import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-admin',
  imports: [],
  template: '<h1> Heloo Admin </h1> <p class="primary"> this is para </p>',
  styles: [".primary{color:red}"]
})

export class Admin {

  courseName = "Samsum Laptop" ;
  
  userService = inject(User)
  userList: any[]= [];
 

  constructor() {
    console.log(this.courseName);
    //this.getUsers();
    const result =  this.userService.getSum(44,55);
  }

  getUsers() {
    // this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((Res: any)=>{
    //   this.userList =  Res;
    // })
    this.userService.getJsonUsers().subscribe((result: any)=>{
      this.userList =  result;
    })
  }
}
