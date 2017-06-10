import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <nav class="navbar navbar-inverse">
      <div class="navbar-header">
        <a href="/" class="navbar-brand">My Angular 2</a>     
      </div>
    </nav>  
  </header>

  <main>
    <div class="jumbotron">
        <h1>Welcome to our App!</h1>
        <p>{{ message }}</p>
    </div>
    
    <div *ngIf="users">
      <div *ngFor="let user of users">
        {{ user.name }} ({{ user.username }})
      </div>
    </div>

  </main>

  <footer class="text-center">
    Copyright &copy; 2017
  </footer>`,
  styles: [`
    .jumbotron { 
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent {
  message = 'Hello';
  users = [
    { id: 26, name: 'Babafej', username: 'Szerelem'},
    { id: 27, name: 'Babifej2', username: 'Cukibaba'},
    { id: 28, name: 'Babafej3', username: 'Cicamica'}
    ]
}