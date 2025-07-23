import { Component } from '@angular/core';
import { debounceTime, filter, from, interval, map, Observable, of, Subject, switchMap } from 'rxjs';
import { User } from '../../services/user';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Lifecycle } from "../lifecycle/lifecycle";
import { HttpClient } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css'
})
export class Rxjs {

  number$: Subject<number> = new Subject<number>;

  carsData$: Observable<any[]> = new Observable<any[]>;

  squareOfNumber: number = 0;

  cityList$ = of(['Pune', 'Mumabi', 'Thane']);

  studentObj$ = of({ name: 'sss', city: 'Nagpur' });

  rollNoList$ = from([11, 112, 115, 116, 117]);

  oneSecInterval = interval(1000);

  searchControl = new FormControl("");

  searchProduct() {
    // this.http.get('https://dummyjson.com/products/search?q='+this.searchText).subscribe((res:any)=>{
    //   console.log(res)
    // })
  }


  constructor(private userService: User, private http: HttpClient) {
    this.searchControl.valueChanges.pipe( 
      debounceTime(1000),
      switchMap((searchText: any) =>
        this.http.get('https://dummyjson.com/products/search?q=' + searchText)
      )
    ).subscribe((res: any) => {
      console.log(res);
    });




    this.carsData$ = this.userService.getCars2().pipe(
      map((resul: any) => resul.data)
    );
    // this.number$ =  this.user.getNum2();
    this.userService.numberSubject$.subscribe(num => {

      this.squareOfNumber = num * num;
    })

    this.userService.activeUserBehvaiourSub$.subscribe((res: any) => {

    })
    this.cityList$.subscribe(res => {
      // debugger;
    })
    // this.rollNoList$.subscribe(num=>{
    //   debugger;
    // })
    this.cityList$.subscribe(res => {
      //debugger;
    })

    // this.oneSecInterval.subscribe(timer=>{
    //   debugger;
    // })
    this.getCarsList();
  }
  carList: any[] = [];

  getCarsList() {
    this.userService.getCars().subscribe((res: any) => {
      this.carList = res;
    })
  }

  chnageSub() {
    this.userService.numberSubject$.next(22);

    this.userService.activeUserBehvaiourSub$.next('Rahul')
  }

  chnageNum() {
    this.number$.next(20)
  }

  chnageNum2() {
    this.number$.next(28)
  }

  chnagenum3() {
    this.userService.changeSubNum()
  }



}
