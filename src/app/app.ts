import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

import { CommonModule } from '@angular/common';

interface Comment {
  id: string;
  body: string;
  username: string;
}

interface User {
  id: string;
  name: string;
  age: number;
  isActive: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  subject$ = new BehaviorSubject<User[]>([]);
  constructor() {
    this.subject$.subscribe((users) => {
      console.log(users);
    });

    this.subject$.next([{ id: '1', name: 'MyUser', age: 123, isActive: true }]);

    console.log('current value hold by behavior subject-> ', this.subject$.getValue());
  }
}

/** behavior subject can behave as an observable but also can emit new data with subject$.next()
 * observable = stream of data and observer.next()
 *
 * behavior subject can hold an value inside , default in this example is [], and we can check the current value at any time by using subject$.getValue()
 */
