import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Signal {

  courseName: string = "Angular";

  courseDuration = signal<string>("3 Months");

  constructor() {
    const signalVakl = this.courseDuration();
    debugger;
    setTimeout(() => {
      this.courseName = "React Js";
    }, 5000);

    setTimeout(() => {
      this.courseDuration.set("2 Month and 2 Weeks")
    }, 10000);

  }

}
