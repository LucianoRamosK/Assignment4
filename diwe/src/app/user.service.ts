import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = [
    {
      id: 1,
      name: 'John White',
      email: 'admin@example.com',
      password: 'password',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      password: 'password',
      role: 'expert',
    },
    {
      id: 3,
      name: 'David Johnson',
      email: 'davidjohnson@example.com',
      password: 'password',
      role: 'expert',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarahwilliams@example.com',
      password: 'password',
      role: 'general',
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michaelbrown@example.com',
      password: 'password',
      role: 'general',
    },
    {
      id: 6,
      name: 'Emily Davis',
      email: 'emilydavis@example.com',
      password: 'password',
      role: 'general',
    },
    {
      id: 7,
      name: 'Daniel Miller',
      email: 'danielmiller@example.com',
      password: 'password',
      role: 'general',
    },
    {
      id: 8,
      name: 'Olivia Wilson',
      email: 'oliviawilson@example.com',
      password: 'password',
      role: 'general',
    },
    {
      id: 9,
      name: 'James Taylor',
      email: 'jamestaylor@example.com',
      password: 'password',
      role: 'general',
    },
    {
      id: 10,
      name: 'Sophia Anderson',
      email: 'sophiaanderson@example.com',
      password: 'password',
      role: 'general',
    },
    // Add more mock user data as needed
  ];

  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  public currentUser$: Observable<any> = this.currentUserSubject.asObservable();

  constructor() {
    this.currentUserSubject.next(this.getCurrentUserFromLocalStorage());
  }

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: any) {
    const newUserId = this.users.length + 1;
    const newUser = { id: newUserId, ...user };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(user: any) {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  private getCurrentUserFromLocalStorage(): any {
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
  }

  private setCurrentUserInLocalStorage(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUserFromLocalStorage();
  }

  getCurrentUser(): any {
    return this.getCurrentUserFromLocalStorage();
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      this.setCurrentUserInLocalStorage(user);
      this.currentUserSubject.next(user);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
