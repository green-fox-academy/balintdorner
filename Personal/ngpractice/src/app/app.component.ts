import { Component } from '@angular/core';
import { User } from './shared/models/users';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message: string = 'Hello';
  // // users: User[] = [
  //   { id: 26, name: 'Jani', username: 'pisti'},
  //   { id: 27, name: 'Bela', username: 'rambo'},
  //   { id: 28, name: 'Kata', username: 'mooouni'}
  // ];
  //activeUser: User;

//   selectUser(user) {
//     this.activeUser = user;
    
//   }
 }