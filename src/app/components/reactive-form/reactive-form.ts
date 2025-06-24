import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
    brand: new FormControl(""),
    model: new FormControl(""),
    year: new FormControl("2025"),
    color: new FormControl(""),
    dailyRate: new FormControl(""),
    carImage: new FormControl(""),
    regNo: new FormControl("")
  });

  carService = inject(Car);
  carList: any[] = [];

  constructor() {
    this.getCars();
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
