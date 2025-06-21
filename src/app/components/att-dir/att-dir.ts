import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-att-dir',
  imports: [NgClass,FormsModule,NgStyle],
  templateUrl: './att-dir.html',
  styleUrl: './att-dir.css'
})
export class AttDir {

  div1BgClassName: string = 'bg-primary';
  isCheked: boolean= true;

  backColor:string = "gray";

  
  myCssObj: any = {
    color:'white',
    'background-color': 'teal',
    'font-size': '31px'
  }

  num1 = '';
  num2 = '';
   studentList = [
    {isActive: true, name: 'AAA', city: 'pune', mobile: '99887766' },
    {isActive: true, name: 'AAA', city: 'pune', mobile: '99887766' },
    {isActive: false, name: 'BBB', city: 'Mumbai', mobile: '1111111' },
    {isActive: true, name: 'CCC', city: 'Solpur', mobile: '2222222' },
    {isActive: false, name: 'DDD', city: 'Panji', mobile: '777777' },
    {isActive: true, name: 'EEE', city: 'Delhi', mobile: '3333333' } ,
    {isActive: true, name: 'CCC', city: 'Solpur', mobile: '2222222' },
    {isActive: false, name: 'DDD', city: 'Panji', mobile: '777777' },
    {isActive: false, name: 'EEE', city: 'Delhi', mobile: '3333333' },
    {isActive: true, name: 'CCC', city: 'Solpur', mobile: '2222222' },
    {isActive: true, name: 'DDD', city: 'Panji', mobile: '777777' },

    {isActive: true, name: 'EEE', city: 'Delhi', mobile: '3333333' }
  ]

  toggleDiv1() {
    this.div1BgClassName  =  this.div1BgClassName == "bg-primary" ? 'bg-success':'bg-primary'
  }



}
