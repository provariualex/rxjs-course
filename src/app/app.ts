import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    const users = [
      { id: '1', name: 'John', age: 25, isActive: true },
      { id: '2', name: 'Dan', age: 125, isActive: false },
      { id: '3', name: 'Mike', age: 45, isActive: true },
    ];
    const users$: Observable<any> = new Observable((observer) => {
      observer.next(users);
    });

    const filteredUsers$ = users$.pipe(
      filter((users) => {
        return users.every((user: { name: any }) => user.name);
      }),
    );

    filteredUsers$.subscribe((data) => {
      console.log(data);
    });
  }
}
