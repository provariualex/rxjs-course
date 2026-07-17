import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, combineLatest, forkJoin, from, Observable, of, withLatestFrom } from 'rxjs';
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
    const comments$ = this.http.get('http://localhost:3004/comments');

    const customValue$ = new Observable((observer) => {
      observer.next('initial value');
      setTimeout(() => {
        observer.next('second value');
      }, 5000);
    });

    comments$.pipe(withLatestFrom(customValue$)).subscribe((result) => console.log(result));
  }
}

/** withLatestFrom will just track the comments stream and take whatever the custom value ahs at that particular time,
 *  if the customValue$ will update this stream will ignore  */
