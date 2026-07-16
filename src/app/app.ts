import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, combineLatest, from, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

interface Comment {
  id: string;
  body: string;
  username: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public users = [
    { id: '1', name: 'Dan' },
    { id: '2', name: 'Ana' },
    { id: '3', name: 'Mihai' },
  ];

  messagePromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('promise resolved');
    }, 1000);
  });

  foo$ = new Observable((observer) => {
    observer.next('hahaha');
    setTimeout(() => {
      observer.next('test');
    }, 3000);
  });

  data$ = combineLatest({
    users: of(this.users),
    messagePromise: from(this.messagePromise),
    data: this.foo$,
  });

  constructor() {
    this.data$.subscribe((result) => console.log(result));
  }
}

/** combineLatest() will wait for both streams to send at least one value and only after that will emit the combined observables,
 * if one of the observables doesent emit at elast once then you will never get any values.
 */
