import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = [
    {
      id: 1,
      name: 'John White',
      email: 'johnwhite@example.com',
      password: 'password1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      password: 'password2',
    },
    // Add more mock user data as needed
  ];

  constructor() {}

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
}
