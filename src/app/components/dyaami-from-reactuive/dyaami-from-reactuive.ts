import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dyaami-from-reactuive',
  imports: [ReactiveFormsModule],
  templateUrl: './dyaami-from-reactuive.html',
  styleUrl: './dyaami-from-reactuive.css'
})
export class DyaamiFromReactuive {

  employeeForm: FormGroup =  new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    department: new FormControl(""),
    familyList: new FormArray([])
  });
  constructor(){
    this.addNewFamily()
  }

  addNewFamily() {
    const familyForm = new FormGroup({
      memberName: new FormControl(""),
      relation: new FormControl(""),
      age: new FormControl("")
    });
    //const familyControl =  this.employeeForm.controls['familyList'] as FormArray;

    //familyControl.push(familyForm)

    this.getFamily.push(familyForm)

  }

  get getFamily() :FormArray {
    return this.employeeForm.controls['familyList'] as FormArray
  }
  removeFamiltyForm(index: number) {
    this.getFamily.removeAt(index);
    this.employeeForm.updateValueAndValidity();
  }

  onSaveEmp() {
    const formValue = this.employeeForm.value;
    debugger;
  }

  // {
  //   name:'',
  //   email:'',
  //   phoen:'',
  //   dept:'',
  //   familyList: [
  //     { memebername: '',age:''},
  //     { memebername: '',age:''}
  //   ]
  // }


}
