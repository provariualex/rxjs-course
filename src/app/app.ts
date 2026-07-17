import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  catchError,
  combineLatest,
  distinct,
  distinctUntilChanged,
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
      observer.next(1);
      observer.next(2);
      observer.next(1);
      observer.next(1);
    });

    const customPipe$ = custom$.pipe(distinctUntilChanged()).subscribe((user) => console.log(user));
  }
}

/** distinctUntilChanged will reset if the value changes */
