import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Logout } from './logout/logout';
// import { Login } from './login/login';
// import { Profile } from './profile/profile';

@Component({
  imports: [RouterOutlet],
 // imports: [RouterOutlet,Login,Profile,Logout],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //Property Example
  //name = 'Kalpesh'
  //Function Binding Example
  // count = 0;
  // Callme() {
  //   alert("Hello, This is first Angular app");
  // }

  //Counter Function Binding Example

  // Counter(action: string) {
  //   if (action === 'increment') {
  //     this.count++;
  //   } else if (action === 'decrement') {
  //     this.count > 0 && this.count--;
  //   }
  //   //Function inside another Function Binding Example call here
  //   this.JointComponent();
  // }

  //Function inside another Function Binding Example
  // JointComponent(){
  //   alert("This is joint component of Login, Profile and Logout");
  // }

  //Input Type Event Example
  // name = '';
  // onInput(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   this.name = inputElement.value;
  // }

  // handleInput(event: Event) {
  //   console.log('Input event:', event);
    handleInput(event: string) {
    console.log(event);
    
    // const inputElement = event.target as HTMLInputElement;
    // this.name = inputElement.value;
  }
}
