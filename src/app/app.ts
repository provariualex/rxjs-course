import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom, from, fromEvent, of } from 'rxjs';

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

    const users$ = of(users);
    const bodyClick$ = fromEvent(document, 'click');

    firstValueFrom(users$).then((users) => {
      console.log(users);
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

/** Difference between Promise and Observables
 *
 *  1 Observable is a stream of data (similar as from()) and Promise is a one time data send (similar as of()), so in observables you can get new values but from promise not
 *  2 Promises are not cancelable but observables yet by using complete
 *  3 Observables has helper methods that can help you to manipulate data rxjs operators meanwhile promises only can use plain javascript
 *  4 Promises are not lazy, without an subscriber an observable will not emit anything at all meanwhile promises are executed no matter what
 *
 * */
