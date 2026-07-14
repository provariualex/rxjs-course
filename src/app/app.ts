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
    const messagePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise resolved');
      }, 1000);
    });

    const messages$ = from(messagePromise);

    messages$.subscribe({
      next: (message) => console.log(message),
      error: (err) => console.log('err', err),
      complete: () => console.log('its done'),
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
