import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  catchError,
  combineLatest,
  debounce,
  debounceTime,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  forkJoin,
  from,
  interval,
  Observable,
  of,
  tap,
  throttleTime,
  timer,
  withLatestFrom,
} from 'rxjs';

import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Comment {
  id: string;
  body: string;
  username: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  interval$ = interval(1000).pipe(tap((value) => console.log(value)));
  constructor() {}
}

/** tap just check what happens does not affect the stream
 *  its ONLY USED FOR DEBUGGING
 */
