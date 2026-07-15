import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Comment {
  id: string;
  body: string;
  username: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  http = inject(HttpClient);
  public comments: Comment[] = [];

  constructor() {
    this.http.get<Comment[]>('http://localhost:3004/comments').subscribe((result) => {
      this.comments = result;
    });
  }
}
