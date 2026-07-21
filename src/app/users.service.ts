import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
interface User {
  id: string;
  name: string;
  age: number;
  isActive: boolean;
}

@Injectable()
export class UsersService {
  public users: User[] = [];
  public users$ = new BehaviorSubject<User[]>(this.users);

  public addUser(user: User) {
    this.users.push(user);
    this.users$.next(this.users);
  }

  public getUsers() {
    return this.users$.getValue();
  }
}
