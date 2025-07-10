import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-contro-flow',
  imports: [FormsModule,SelectModule,TableModule,NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault,DatePickerModule],
  templateUrl: './contro-flow.html',
  styleUrl: './contro-flow.css'
})
export class ControFlow {

  isDiv1Visiable: boolean = true;
 
  div2Status: string = 'Show';

  isDiv3Visisable: boolean = true;
  startingCharDayName: string = '';
date: Date = new Date();
minDateValue: Date =  new Date();
  cityList = ['Nagpur', 'Delhi', '', 'Noida', 'Mumbai', 'Pune' ,''];

  getDiv1VisibilityStatus() {
    return this.isDiv1Visiable;
  }
  get getDiv2Status(): string {
    return this.div2Status;
  }
  
  getStudentList() {
    return this.studentList.filter(m=>m.isActive == true);
  }

  studentList = [
    {isActive: false, name: 'AAA', city: 'pune', mobile: '99887766' },
    {isActive: false, name: 'BBB', city: 'Mumbai', mobile: '1111111' },
    {isActive: false, name: 'CCC', city: 'Solpur', mobile: '2222222' },
    {isActive: false, name: 'DDD', city: 'Panji', mobile: '777777' },
    {isActive: false, name: 'EEE', city: 'Delhi', mobile: '3333333' } ,
    {isActive: false, name: 'CCC', city: 'Solpur', mobile: '2222222' },
    {isActive: false, name: 'DDD', city: 'Panji', mobile: '777777' },
    {isActive: false, name: 'EEE', city: 'Delhi', mobile: '3333333' }, 
    {isActive: false, name: 'CCC', city: 'Solpur', mobile: '2222222' },
    {isActive: false, name: 'DDD', city: 'Panji', mobile: '777777' },
    {isActive: false, name: 'EEE', city: 'Delhi', mobile: '3333333' }
  ]

onDatepickerClosed() {
  console.log("onDatepickerClosed")
}

onDateSelect() {
  console.log("onDateSelect")
}


  hideDiv1() {
    this.isDiv1Visiable = false;
  }
  showDiv1() {
    this.isDiv1Visiable = true;
  }
  toggleDiv3() {
    this.isDiv3Visisable = !this.isDiv3Visisable;
  }

  toggleDiv2() {
    // if(this.div2Status == 'Show') {
    //   this.div2Status = "hide"
    // } else {
    //   this.div2Status = "Show"
    // }
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];

    // }
    // array.forEach(element => {

    // });

    // for (const key in object) {
    //   if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     const element = object[key];

    //   }
    // }
    // for (const element of object) {

    // }

    // while (condition) {

    // }

    this.div2Status = this.div2Status == "Show" ? 'Hide' : 'Show';

  }
}
