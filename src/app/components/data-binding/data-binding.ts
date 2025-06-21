import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

  courseName: string = "Angular";
  courseDuration = "3 Month";
  latestVersion: string;
  isActive: boolean = false;
  myPlaceHoldertext = "Enter Surname";
  inputType = "checkbox";
  myClassName= "bg-warning p-3";

  studentObj = {
    name: '',
    city: 'Pune',
    mobile:'1122334455'
  };

  cityList: string[] = ['Pune','Nagpur','Mumbai']

  constructor() {
    this.latestVersion = "angular 20"
  }

  showWelcomeMessage() {
    alert("Welcome b-30")
  }

  showMessage(message:string) {
    debugger;
    alert(message)
  }

  cityChanged(){
    alert("City Got Chnaged")
  }

  onTextChnages() {
    console.log("Text Chnages")
  }

  onMOuseEneter() {
    console.log("on Mouse Eneter")
  }

  onMOuseLeft() {
    console.log("on Mouse Left")
  }

  onCourseChnage() {
    this.courseName = "DOt Net course"
  }

}
