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
  throttleTime,
  timer,
  withLatestFrom,
} from 'rxjs';

import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

interface Comment {
  id: string;
  body: string;
  username: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  formBuilder = inject(NonNullableFormBuilder);
  searchForm = this.formBuilder.group({
    searchValue: '',
  });
  onSearchSubmit() {
    console.log('onSubmit');
  }

  constructor() {

    this.searchForm
      .get('searchValue')
      ?.valueChanges.pipe(throttleTime(1000))
      .subscribe((value) => console.log(value));
  }
}

/** throttle will block any activity for a period of time
 *
 * if you for example set time for 2 seconds you can click a button to call an api once at 2 second at most*/
