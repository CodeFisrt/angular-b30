import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  template: '<h1> Heloo Admin </h1> <p class="primary"> this is para </p>',
  styles: [".primary{color:red}"]
})

export class Admin {

  courseName = "Samsum Laptop" ;

 

  constructor() {
    console.log(this.courseName)
  }
}
