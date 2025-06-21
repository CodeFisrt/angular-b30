import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [NgFor],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetAPI {

  //http =  inject(HttpClient) //16
  userList: any[] = [];
  todoItemList: any[] = [];
  locationArray: any[] = [];


  constructor(private http: HttpClient) {
    debugger;
    this.getJsonUsers();
  }

  getJsonUsers() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      debugger;
      this.userList = res;
    })

  }

  getTodoItems() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((result: any) => {
      this.todoItemList = result;
    })
    //console.log(result)
  }

  getAllLocations() {
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetBusLocations").subscribe((res: any) => {
      this.locationArray = res;
    })
  }





}
