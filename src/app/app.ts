import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    const users = [
      { id: '1', name: 'Jack', age: 10 },
      { id: '2', name: 'Jones', age: 25 },
      { id: '3', name: 'Rich', age: 35 },
    ];

    const users$ = from(users);
    const bodyClick$ = fromEvent(document, 'click');

    users$.subscribe((user) => {
      console.log(user);
    });

    const messagePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise resolved');
      }, 1000);
    });

    const messages$ = from(messagePromise);

    messages$.subscribe((message) => {
      console.log(message);
    });

    bodyClick$.subscribe((event) => {
      console.log(event);
    });
  }
}
