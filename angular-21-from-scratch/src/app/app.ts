import { Component, signal } from '@angular/core';
//import { Component, computed, effect, signal, WritableSignal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserData } from './user-data/user-data';
import { AdminData } from './admin-data/admin-data';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
// import { Logout } from './logout/logout';
// import { Login } from './login/login';
// import { Profile } from './profile/profile';

@Component({
  imports: [RouterOutlet, FormsModule],
  // imports: [RouterOutlet,Login,Profile,Logout, UserData, AdminData],
  selector: 'app-root',
  styleUrl: './app.css',
  //styleUrls:["./app.css","./common.css"],
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
  // btnDisable=false

  // toggle() {
  //   this.btnDisable=!this.btnDisable;
  // }
  //   url="https://angular.io/assets/images/logos/angular/angular.svg"
  //   AngularLogo="Angular Logo"

  //Signal Example
  // data = 10
  // count = signal(10)

  // constructor() {
  //   effect(() => {
  //     //console.log("data value changed:", this.data);
  //     console.log("Count value changed:", this.count());

  //     if (this.count() == 10) {
  //       this.count.set(0)
  //     }
  //   });
  // }

  // updateData() {
  //   this.data++
  // }

  // updatecount() {
  //   this.count.set(this.count() + 1)
  // }

  //Computed Signal Example
  // height = signal(100);
  // width = signal(20);
  // area = computed(() => this.height() * this.width())

  // constructor() {
  //   effect(() => {
  //     console.log("Area value changed:", this.area());
  //   });
  // }
  // handleHeightChange(){
  //   this.height.set(this.height() + 10)
  // }

  //Effect Example in Angular

  // speed = signal(0);
  // color = 'Black';

  // Fruit = signal('Mango');

  // constructor() {
  //   effect(() => {
  //     if (this.speed() > 0 && this.speed() < 80) {
  //       this.color = 'Green';
  //     }
  //     if (this.speed() >= 90 && this.speed() < 120) {
  //       this.color = 'Orange';
  //     }
  //     if (this.speed() >= 120) {
  //       this.color = 'Red';
  //     }
  //     console.log('Speed value changed:', this.speed());
  //   });

  //   effect(() => {
  //     console.log('Fruit value changed:', this.Fruit());
  //   });
  // }
  // increaseSpeed() {
  //   this.speed.set(this.speed() + 10);
  // }

  // changeFruit() {
  //   if (this.Fruit() === 'Mango') {
  //     this.Fruit.set('Apple');
  //   } else {
  //     this.Fruit.set('Mango');
  //   }
  // }

  //Signal with WritableSignal and Computed Signal Example

  //   data: WritableSignal<string> = signal<string>('Kalpesh');
  //   users: WritableSignal<string[]> = signal<string[]>(['Kalpesh', 'Ramesh', 'Suresh']);
  //   speed: Signal<number> = computed<number>(() => 90);

  // handledata(){
  //     this.data.set('Kalpesh Bhonge');
  //         console.log('Data value updated:', this.data());

  //   }
  //   handleData(){
  //     this.users.update((currentUsers) => [...currentUsers, 'Bhushan', 'Rohit']);

  //     console.log('User value Added:', this.users());
  //   }

  // counter: WritableSignal<number> = signal<number>(0);

  // increment() {
  //   this.counter.update((currentValue) => currentValue + 1);
  // }
  // decrement() {
  //   if (this.counter() > 0) {
  //     this.counter.update((currentValue) => currentValue - 1);
  //   }
  // }
  // reset() {
  //   this.counter.set(0);
  // }

  // name: WritableSignal<string> = signal('')

  // resetValue() {
  //   this.name.set('Kalpesh Bhonge');
  // }
  // setValue(value: string) {
  //   this.name.set(value);
  // }

  //Hide Show & Login Logout & Status change logic
  //   isLogin = signal(false);
  //   show = signal(true)

  //   status = signal("Not Started")

  // handleLogin(status:boolean){
  // this.isLogin.set(status)
  // }

  // handleStatus(event : Event){
  //   let target = event.target as HTMLSelectElement
  // this.status.set(target.value)
  // }

  // users = signal(['Kalpesh', 'Suresh', 'Akash', 'Prakash', 'Ramesh']);

  // usersDetails = signal([
  //   { id: 1, name: 'Kalpesh', surname: 'Bhonge', email: 'kalpesh@gmail.com' },
  //   { id: 2, name: 'Suresh', surname: 'Patil', email: 'suresh@gmail.com' },
  //   { id: 3, name: 'Akash', surname: 'Jadhav', email: 'akash@gmail.com' },
  //   { id: 4, name: 'Prakash', surname: 'Borase', email: 'prakash@gmail.com' },
  //   { id: 5, name: 'Ramesh', surname: 'Dubey', email: 'ramesh@gmail.com' },
  // ]);

  // status = signal('notStarted');

  // handleSwitchStates(event: Event) {
  //   let target = event.target as HTMLSelectElement;
  //   this.status.set(target.value);
  // }

  // name =signal('Kalpesh Bhonge')
  // age = 26

  // userData = signal({
  //   name: 'Kalpesh Bhonge',
  //   age: 26,
  //   email: 'kalpesh@test.com',
  // });

  // updateUserData(key: string, val: string) {
  //         this.userData.update((item) => ({ ...item, [key]: val }));
  // if (key == 'name') {
  //   this.userData.update((item) => ({ ...item, name: val }));
  // }
  // if (key == 'age') {
  //   this.userData.update((item) => ({ ...item, age: parseInt(val) }));
  // }
  // if (key == 'email') {
  //   this.userData.update((item) => ({ ...item, email: val }));
  // }
  //}

  //Getter and Setter in Angular how to define and use
  //   userName = signal("Kalpesh Bhonge")
  //   userData = signal({
  //     name: 'Kalpesh Bhonge',
  //     email: "kalpesh@test.com"
  //   })

  //   get uName(){
  //     return this.userName();
  //   }
  //   set uName(val:string){
  //     this.userName.set(val)
  //   }

  //   getUserRecord(){
  //     return this.userData().name
  //   }

  //   setUserRecord(val:string){
  //     this.userData.update((item)=>({...item,name:val}))
  //   }

  //    getUserRecords(){
  //     return this.userData().email
  //   }

  //   setUserRecords(val:string){
  //     this.userData.update((item)=>({...item,email:val}))
  //   }

  tasks = signal([{ id: 0, Title: 'Lunch Time', Completed: false }]);

  title = signal('');

  addTask() {
    if (this.title()) {
      this.tasks.update((item) => [
        ...item,
        { id: this.tasks().length, Title: this.title(), Completed: false },
      ]);
      this.title.set('');
    }
  }

  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((tasks) => tasks.id != id));
  }
}
