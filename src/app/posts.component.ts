import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subject, Subscription, take, takeUntil, takeWhile } from 'rxjs';
import { Unsubscribe } from './unsubscribe';

@Component({
  selector: 'app-posts',
  template: `
    <h1>Posts</h1>
    <div>{{ interval$ | async }}</div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class PostsComponent extends Unsubscribe {
  public interval$ = interval(1000);

  constructor() {
    super();
    this.interval$.pipe(takeUntil(this.unsubscribe$)).subscribe((i) => console.log(i));
    this.interval$.pipe(takeUntil(this.unsubscribe$)).subscribe((i) => console.log(i));
    this.interval$.pipe(takeUntil(this.unsubscribe$)).subscribe((i) => console.log(i));
    this.interval$.pipe(takeUntil(this.unsubscribe$)).subscribe((i) => console.log(i));
  }
}

/** takeUntil(this.unsubscribe$) is most common used because you can use same subject for all observables to unsubscribe them when the component is destroyed */
