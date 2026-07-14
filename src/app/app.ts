import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom, from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    const users = [
      { id: '1', name: 'Ala', age: 11 },
      { id: '2', name: 'Dan', age: 22 },
      { id: '3', name: 'Can', age: 33 },
    ];

    const users$ = new Observable((observer) => {
      users.forEach((user) => {
        observer.next(user);
      });
    });
    users$.subscribe((data) => console.log(data));
  }
}

/** Difference between Promise and Observables
 *
 *  1 Observable is a stream of data (similar as from()) and Promise is a one time data send (similar as of()), so in observables you can get new values but from promise not
 *  2 Promises are not cancelable but observables yet by using complete
 *  3 Observables has helper methods that can help you to manipulate data rxjs operators meanwhile promises only can use plain javascript
 *  4 Promises are not lazy, without an subscriber an observable will not emit anything at all meanwhile promises are executed no matter what
 *
 * */
