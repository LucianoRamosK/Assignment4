import { Injectable } from '@angular/core';

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
