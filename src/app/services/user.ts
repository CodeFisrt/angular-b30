import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {

  loggedUserName: string = "Chetan";

  constructor(private http: HttpClient) { }



  getJsonUsers() {
    debugger;
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }


  getSum(num1: number,num2: number) {
    return num1+ num2;
  }

}
