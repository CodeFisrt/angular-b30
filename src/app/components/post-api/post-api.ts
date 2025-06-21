import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css'
})
export class PostAPI {

  newLocationObj: any = {
    "locationId": 0,
    "locationName": "",
    "code": ""
  };


  http = inject(HttpClient);

  onSaveLocation() {
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/BusBooking/PostBusLocation",this.newLocationObj).subscribe((result:any)=>{
         debugger;
      alert("Location Created")
    })
  }

}
