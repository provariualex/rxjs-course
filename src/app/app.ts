import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  catchError,
  combineLatest,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  forkJoin,
  from,
  Observable,
  of,
  withLatestFrom,
} from 'rxjs';
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
  constructor() {
    const custom$ = new Observable((observer) => {
      observer.next({ id: '1', name: 'Dan', age: 25 });
      observer.next({ id: '2', name: 'Dan', age: 25 });
      observer.next({ id: '3', name: 'Dan', age: 5 });
      observer.next({ id: '4', name: 'Dan', age: 25 });
    });


    const customPipe$ = custom$
      // @ts-ignore
      .pipe(distinctUntilKeyChanged('age'))
      .subscribe((user) => console.log(user));
  }
}

/** distinctUntilKeyChanged will reset if the value changes but you can select based on what key, in this case based on age */
