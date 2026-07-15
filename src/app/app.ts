import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
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
  http = inject(HttpClient);
  // public comments! : Comment[]
  //
  // constructor() {
  //   this.http.get<Comment[]>('http://localhost:3004/commentss').subscribe({
  //     next: comments => this.comments = comments,
  //     error: err => this.comments = []
  //   });
  // }

  comments$: Observable<Comment[]> = this.http
    .get<Comment[]>('http://localhost:3004/commentss')
    .pipe(
      catchError(() => {
        return of([]);
      }),
    );
}

/**
 * something$ is an observable therefore we cannot call the next,error complete functions
 * something$.subscribe(here is an observer inside an observable, here we can call the next, error, complete functions)
 * */
