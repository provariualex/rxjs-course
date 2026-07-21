import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';

interface Comment {
  id: string;
  body: string;
  username: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  providers: [UsersService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  userService = inject(UsersService);
  public subject$ = this.userService.getUsers();

  constructor() {
    this.userService.addUser({ id: '1', name: 'Test', age: 23, isActive: true });

    console.log(this.subject$);

    this.userService.addUser({ id: '1', name: 'Test', age: 23, isActive: true });

    console.log(this.subject$);
  }
}

/** user service with behavior subject
 */
