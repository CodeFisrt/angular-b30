import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {

  loggedUserName: string = "Chetan";

  numberSubject$: Subject<number> = new Subject<number>();

  activeUserBehvaiourSub$: BehaviorSubject<string> = new BehaviorSubject<string>('ABC')

  apiData: any;

  constructor(private http: HttpClient) {
   // this.number$.next(5)
  }

  getCars() {
    debugger
    return this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").pipe(
       tap((response:any)=>{ 
        this.apiData  = response;
      }),
       map((result: any) => { 
        return result.data;
      })
     
     
    )
  }

   getCars2():Observable<any[]> { 
    return this.http.get<any[]>("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars");
  }

  getJsonUsers() {
    debugger;
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }


  getSum(num1: number, num2: number) {
    return num1 + num2;
  }


  changeSubNum() {
    //this.number$.next(6)
  }
  getNum() {
    return of(5)
  }

  getNum2() {

    setTimeout(() => {
      return of(10)
    }, 5000)

  }

}
