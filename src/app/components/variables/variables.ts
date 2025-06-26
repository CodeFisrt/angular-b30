import { DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Optional } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [UpperCasePipe, LowerCasePipe,TitleCasePipe
    ,DecimalPipe,DatePipe,SlicePipe,JsonPipe],
  templateUrl: './variables.html',
  styleUrl: './variables.css'
})
export class Variables {

 

  //declaration + initialization way-1
   courseName: string = "Angular 20";
  courseDescription = "this is angular course";
  public rollNo: number = 123;
  protected isActive: boolean = true;
  currenDate: Date = new Date();

  productPrice: number = 123.532423;
  cityList = [11,12,13,14,15,16,17,18];
  studentObj = {
    name:'aaa',
    mobile:'222222',
    email:'chetan@gmail.com'
  }
  //declaration
  courseDuration: string;
 


  //initialization
  productName = "Moto A-2 Mobile";

  student :any; 

  employee: unknown;

  firstName: string = 'Chetan';
  lastName: string = 'Jogi';
  fullName: string = '';
  //productPrice: string = 12;



  constructor(){ 
    this.fullName = this.firstName + " " + this.lastName; 
    this.courseDuration = "3 Months";
    //this.productPrice = 1200.50;

    ///this.courseName = '333';

    this.isActive = false;
    console.log(this.productPrice)
     

    //this.productName = 12312;
    this.student = "231424234";
    this.student = 324234;
    this.student = {

    };

    this.showWelcomeMessage();
    this.showMessage("Welcome");

    const result = this.addTwoNum(12,"abc");
    
  }

  showWelcomeMessage() {
    const name= "";
    let fullName = this.firstName + " " + this.lastName;
   // alert("Welcome b-30")
  }

  private showMessage(message: string):void {
    //alert(message)
  }

  addTwoNum(num1: number, num2: any) :number {
    return num1 + num2;
  }






}
