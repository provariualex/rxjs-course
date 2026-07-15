import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription, take, takeWhile } from 'rxjs';

@Component({
  selector: 'app-posts',
  template: `
    <h1>Posts</h1>
    <div>{{ interval$ | async }}</div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class PostsComponent {
  public interval$ = interval(1000);

  constructor() {
    this.interval$.pipe(takeWhile(i => i < 5)).subscribe((i) => console.log(i));
  }
}

/** async pipe automatically unsubscribes so ngOnDestroy and .unsubscribe() is not needed if you just use observable in html along with | async */
