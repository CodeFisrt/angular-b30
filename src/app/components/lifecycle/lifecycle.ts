import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, inject, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css'
})
export class Lifecycle implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy {


  courseName: string = "";

  http2= inject(HttpClient)

  constructor(private http: HttpClient,private userService: User) {
    debugger;
    setTimeout(() => {
      this.courseName = "Angular Full Course"
    }, 5000)
    //variabel initialization
    this.userService.numberSubject$.subscribe(num=>{
      debugger;
      
    })

    this.userService.activeUserBehvaiourSub$.subscribe((res:any)=>{
      debugger;
    })
  }
 
  chnageBoth() {
     this.userService.numberSubject$.next(66);

    this.userService.activeUserBehvaiourSub$.next('Ankit')
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
