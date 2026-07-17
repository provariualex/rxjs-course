import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, combineLatest, forkJoin, from, Observable, of } from 'rxjs';
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
  http = inject(HttpClient);

  constructor() {
    const post$ = this.http.get('http://localhost:3004/posts');
    const comments$ = this.http.get('http://localhost:3004/comments');

    forkJoin({
      posts: post$,
      comments: comments$,
    }).subscribe((result) => console.log(result));
  }
}

/** forkjoin its used for 2 or more parallel api calls and return an observable only after all of them has responded. */
