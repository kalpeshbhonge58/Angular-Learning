import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logout } from './logout/logout';
import { Login } from './login/login';
import { Profile } from './profile/profile';

@Component({
  imports: [RouterOutlet,Login,Profile,Logout],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name = 'Kalpesh'
}
