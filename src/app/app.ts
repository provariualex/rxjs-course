import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom, from, fromEvent, Observable, of } from 'rxjs';
import { CustomObserver } from './custom-observers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    const users$ = from([1, 2, 3, 4, 5, 6]);
    users$.subscribe(new CustomObserver());
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
