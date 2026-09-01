import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  @Input() userName: string = '';
  @Output() selectUser = new EventEmitter<string>();
  @Output() deleteUser = new EventEmitter<string>();

  whichUser(name: string|undefined) {
    this.selectUser.emit(name);
  }

  delete(name: string|undefined) {
    this.deleteUser.emit(name);
  }

}
