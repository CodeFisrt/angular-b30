import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../reusable/button/button';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, FormsModule, Button],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form implements OnInit {
  btnName = 'Save data';
  carForm!: FormGroup;
  carObj = {
      CarId: 0,
      Brand: '',
      Model: '',
      Year: 2025,
      Color: '',
      DailyRate: 0,
      CarImage: '',
      RegNo: ''
  }
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
   this.formInit();
  }
  formInit() {
       this.carForm = this.fb.group({
      CarId: 0,
      Brand: ['',(Validators.required,Validators.minLength(4))],
      Model: [''],
      Year: 2025,
      Color: [''],
      DailyRate: 0,
      CarImage: [''],
      RegNo: ['']
    })
  }
  onSubmit() {
    console.log(this.carForm.value);
  }
  onSaveData() {
    console.log(this.carObj)
  }
}
