import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { Variables } from "./components/variables/variables";
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [User, Variables,Admin,DataBinding,RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-b30';
}
