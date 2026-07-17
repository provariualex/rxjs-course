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
  Observable,
  of,
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
      ?.valueChanges.pipe(debounceTime(1000))
      .subscribe((value) => console.log(value));
  }
}

/** debounce, you already know what is doing you like to use it */
