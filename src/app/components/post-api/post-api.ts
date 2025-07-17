import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, JsonPipe],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css'
})
export class PostAPI {

  newLocationObj: any = {
    "locationId": 0,
    "locationName": "",
    "code": ""
  };
  locationArray: any[] = [];
  isAPICallInProgress: boolean = false;


  constructor() {
    this.getAllLocations();
  }


  http = inject(HttpClient);//16 arrow fun - guard and interceptor

  getAllLocations() {
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetBusLocations").subscribe((res: any) => {
      this.locationArray = res;
    })
  }

  onCodeChange(value:any) {
    debugger;
    console.log(this.newLocationObj.code);
    console.log("Code changed")
  }

  onSaveLocation() {
    debugger;
    if (this.isAPICallInProgress == false) {
      this.isAPICallInProgress = true;
      this.http.post("https://api.freeprojectapi.com/api/BusBooking/PostBusLocation", this.newLocationObj).subscribe((result: any) => {
        debugger;
        alert("Location Created");
        this.isAPICallInProgress = false;
        this.getAllLocations();
      })
    }

  }


  onUpdate() {
    this.http.post("https://api.freeprojectapi.com/api/BusBooking/PutBusLocation", this.newLocationObj).subscribe((result: any) => {
      debugger;
      alert("Location Updated");
      this.getAllLocations();
    })
  }
  onEdit(data: any) {
    this.newLocationObj = data;
  }

}
