import { Component } from '@angular/core';
import { User } from './shared/models/users';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message: string = 'Hello';
  users: User[] = [
    { id: 26, name: 'Babafej', username: 'Szerelem'},
    { id: 27, name: 'Babifej2', username: 'Cukibaba'},
    { id: 28, name: 'Babafej3', username: 'Cicamica'}
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
    
  }
}