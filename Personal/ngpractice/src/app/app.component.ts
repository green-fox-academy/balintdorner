import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styles: [`
    .jumbotron { 
      background-color: green;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent {}