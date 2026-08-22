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

  //Event Handling Example
  // handleInput(event: Event) {
  //   console.log('Input event:', event);

  //Simple String Datatype Event Example
    // handleInput(event: string) {
    // console.log(event);

    // const inputElement = event.target as HTMLInputElement;
    // this.name = inputElement.value;
  //}

  //Data Types 
 // data: any = 20

  //Simple Number and String Datatype Event Example
  // updateData(val : Number,user :string) {
  //   this.data = val
  //   console.log(user);

  //   console.log(this.Sum(10, 20));
  // }

  //Sum Function Event Example
  // Sum(number1: number, number2: number): number {
  //   return number1 + number2;
  // }

// Multiple Event Types Example
  // handleEvent(event: PointerEvent | Event |MouseEvent) {
  //   console.log(event);
  // }

  //If need to handle specific event types, you can create separate methods for each event type. For example: 
  // handleEvent2(event: Event) {
  //   console.log(event);
  // }


  //Property Binding Example
  btnDisable=false

  toggle() {
    this.btnDisable=!this.btnDisable;
  }
    url="https://angular.io/assets/images/logos/angular/angular.svg"
    AngularLogo="Angular Logo"
}
