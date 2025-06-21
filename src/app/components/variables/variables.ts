import { Component, Optional } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css'
})
export class Variables {

 

  //declaration + initialization way-1
  courseName: string = "Angular 20";
  rollNo: number = 123;
  isActive: boolean = true;
  currenDate: Date = new Date();

  //declaration
  courseDuration: string;
  productPrice: number;


  //initialization
  productName = "Moto A-2 Mobile";

  student :any; 

  firstName: string = 'Chetan';
  lastName: string = 'Jogi';
  fullName: string = '';
  //productPrice: string = 12;



  constructor(){ 
    this.fullName = this.firstName + " " + this.lastName; 
    this.courseDuration = "3 Months";
    this.productPrice = 1200.50;

    this.courseName = '333';

    this.isActive = false;
    console.log(this.productPrice)
     

    //this.productName = 12312;
    this.student = "231424234";
    this.student = 324234;
    this.student = {

    };

    this.showWelcomeMessage();
    this.showMessage("Welcome");

    const result = this.addTwoNum(12,45);
    
  }

  showWelcomeMessage() {
    const name= "";
    let fullName = this.firstName + " " + this.lastName;
    alert("Welcome b-30")
  }

  private showMessage(message: string):void {
    alert(message)
  }

  addTwoNum(num1: number, num2: number) :number {
    return num1 + num2;
  }






}
