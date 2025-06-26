import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css'
})
export class Lifecycle implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy {


  courseName: string = "";

  http2= inject(HttpClient)

  constructor(private http: HttpClient) {
    debugger;
    setTimeout(() => {
      this.courseName = "Angular Full Course"
    }, 5000)
    //variabel initialization
  }
 

  ngOnInit(): void {
    debugger;
    //api call trigger
    console.log("ngOnInit  11")
  }

   ngAfterContentInit(): void {
    console.log("ngAfterContentInit  22")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck  ngDoCheck")
  }
  


 
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked  33")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit  44")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked  55")
  }

  ngOnDestroy(): void {
    debugger;
    console.log("ngOnDestroy  66")
  }

  printLog() {
    console.log("Test Log")
  }
}
