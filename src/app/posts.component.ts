import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  public interval$ = interval(1000).pipe(takeUntilDestroyed());

  constructor() {
    this.interval$.subscribe((i) => console.log(i));
  }
}

/** takeUntil(this.unsubscribe$) is most common used because you can use same subject for all observables to unsubscribe them when the component is destroyed */
