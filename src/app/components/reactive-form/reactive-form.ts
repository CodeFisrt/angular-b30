import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Car } from '../../services/car';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

  newCarForm: FormGroup = new FormGroup({
    carId: new FormControl(0),
    brand: new FormControl("", [Validators.required, Validators.minLength(5)]),
    model: new FormControl("", [Validators.required, Validators.email]),
    year: new FormControl("2025"),
    color: new FormControl(""),
    dailyRate: new FormControl("",),
    carImage: new FormControl(""),
    regNo: new FormControl("")
  });

  carService = inject(Car);
  carList: any[] = [];

  constructor() {
    setTimeout(() => {
      this.newCarForm.controls['year'].setValue("2029")
    }, 5000);
    this.getCars();
    this.newCarForm.controls['year'].valueChanges.subscribe((yearValue => {
      console.log(yearValue)
    }))
    this.newCarForm.valueChanges.subscribe((formValue=>{
      console.log(formValue)
    }))
    this.newCarForm.controls['dailyRate'].valueChanges.subscribe(dailRate=>{
      if(this.newCarForm.controls['year'].value == 2025 && dailRate >500) {
        alert('for Cars with 2025 year dailu rate cant be grate than 500');
      }
    })
    this.newCarForm.controls['regNo'].valueChanges.subscribe(regNoVal=>{
      if(regNoVal != '' ) {
        this.newCarForm.controls['carImage'].addValidators([Validators.required]);
      } else {
        this.newCarForm.controls['carImage'].removeValidators([Validators.required]);
      }
      this.newCarForm.updateValueAndValidity();
    })
  }



  onEdit(carData: any) {
    this.newCarForm = new FormGroup({
      carId: new FormControl(carData.carId),
      brand: new FormControl(carData.brand),
      model: new FormControl(carData.model),
      year: new FormControl(carData.year),
      color: new FormControl(carData.color),
      dailyRate: new FormControl(carData.dailyRate),
      carImage: new FormControl(carData.carImage),
      regNo: new FormControl(carData.regNo)
    })
    this.newCarForm.patchValue({
      carId:carData.carId,
      brand: carData.barcnd
    })
  }

  getCars() {
    this.carService.getAllCars().subscribe((result: any) => {
      this.carList = result.data;
    })
  }
  onSaveCar() {
    debugger;
    const formValue = this.newCarForm.value;

    this.carService.saveNewCar(formValue).subscribe((Res: any) => {
      alert("Car Created Success")
    })
  }



}
