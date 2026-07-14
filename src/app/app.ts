import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    /** OF create an observable and is sending only once the full array */
    const numbers$ = of([1, 2, 3, 4, 5]);
    /** From create an observable and is sending every value from array one by one => stream of data */
    const otherNumbers$ = from([1, 2, 3, 4, 5]);

    numbers$.subscribe((data) => {
      console.log(data);
    });

    otherNumbers$.subscribe((data) => {
      console.log(data);
    });
  }
}
