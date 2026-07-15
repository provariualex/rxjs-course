import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    const user = [
      { id: '1', name: 'John', age: 25 },
      { id: '2', name: 'Dan', age: 125 },
      { id: '3', name: 'Mike', age: 45 },
    ];
    const users$ = of(user).pipe(
      map((users) => {
        return users.map((user) => user.name);
      }),
    );
    users$.subscribe((data) => console.log(data));
  }
}

/** there are 2 maps, one is the rxjs operator and other is the javascript map,
 *  because you get an array of users and want to map each user,
 *  if ou just wanted to return something else like an empty array,
 *  the second map would not be necessary. */
