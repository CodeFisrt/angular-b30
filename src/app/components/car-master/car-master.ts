import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../services/car';
import { BaseIcon } from "primeng/icons/baseicon";
import { NgTemplateOutlet } from '@angular/common';
import { Highlight } from '../../directive/highlight';

@Component({
  selector: 'app-car-master',
  imports: [FormsModule, BaseIcon,NgTemplateOutlet, Highlight],
  templateUrl: './car-master.html',
  styleUrl: './car-master.css'
})
export class CarMaster {

  carList: any[] = [];
  carObj: any = {
    "carId": 0,
    "brand": "string",
    "model": "string",
    "year": 0,
    "color": "string",
    "dailyRate": 0,
    "carImage": "string",
    "regNo": "string",
    detail: {
      price:1,
      ratePerDay:222
    }
  }
  http = inject(HttpClient)
  carService = inject(Car)

  constructor() {
    this.getCars();
    console.log(this.carObj?.detail.price)

    const role = this.carService.loggedUserRole;
  }
  getCars() {
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res: any) => {
      debugger;
      this.carList = res.data;
    })
  }

  onEdit(data: any) {
    this.carObj =  data;
  }
 
  onUpdate() {
    // this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar",this.carObj).subscribe((res:any)=>{
    //   alert("Car Data Updated");
    //   this.getCars();

    // })

    this.carService.updateCar(this.carObj).subscribe((res:any)=>{
      alert("Car Data Updated");
      this.getCars();
    })
  }

  onDelete(id:number) {
    debugger;
    const isConfirm =  confirm("Are you sure want to Delete");
    if(isConfirm == true) {
      this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=" + id).subscribe((Res:any)=>{
        alert("Car Deleted");
        this.getCars();
      })
    }
    
  }
}
