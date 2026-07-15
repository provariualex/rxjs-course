import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  template: `
    <h1>Posts</h1>
    <div>{{ interval$ | async }}</div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class PostsComponent implements OnDestroy {
  public interval$ = interval(1000);
  public intervalSubscription: Subscription;

  constructor() {
    this.intervalSubscription = this.interval$.subscribe((i) => console.log(i));
  }
  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }
}


/** async pipe automatically unsubscribes so ngOnDestroy and .unsubscribe() is not needed if you just use observable in html along with | async */
