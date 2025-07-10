import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-get-api',
  imports: [NgFor,NgIf],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetAPI implements OnInit{

  //http =  inject(HttpClient) //16
  userList: any[] = [];
  todoItemList: any[] = [];
  locationArray: any[] = [];
  isLoader: boolean = true;



  constructor(private http: HttpClient,private userService: User) {
    debugger;
   

    const result =  this.userService.getSum(12,15);
  }

  ngOnInit(): void {
     this.getJsonUsers();
  }

  getJsonUsers() {
    debugger;
    // this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
    //   debugger;
    //   this.userList = res;
    // })

    this.userService.getJsonUsers().subscribe((res:any)=>{
      debugger;
      this.userList = res;
      this.isLoader = false;
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
