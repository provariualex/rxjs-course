import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  catchError,
  combineLatest,
  distinct,
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
  public users = [
    { id: '1', name: 'Dan', age: 25, isActive: true },
    { id: '2', name: 'Ana', age: 25, isActive: true },
    { id: '3', name: 'Dana', age: 25, isActive: true },
    { id: '4', name: 'Emma', age: 3.5, isActive: true },
  ];

  constructor() {
    const user$ = from(this.users)
      .pipe(distinct((user) => user.age === 25))
      .subscribe((user) => console.log(user));
  }
}

/** distinct() will emit only distinct values, in this case only first user that has age 25 will be emitted,
 *  after that other users that have same age will be skipped,
 * but if user has a different age will be emitted  */
