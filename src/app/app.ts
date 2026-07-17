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
    interval(1000)
      .pipe(debounce((val) => timer(val * 200)))
      .subscribe((value) => {
        console.log(value);
      });

    this.searchForm
      .get('searchValue')
      ?.valueChanges.pipe(debounceTime(1000))
      .subscribe((value) => console.log(value));
  }
}

/** debounce will actually increase the debounce time until it hits the 1000, im still confused it doesent seems to work fine, but it should stop at 4 because then its hitting the limmit of 1000 */
