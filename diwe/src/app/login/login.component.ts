import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  login(): void {
    const user = this.userService
      .getUsers()
      .find((u) => u.email === this.email && u.password === this.password);
    if (user) {
      // Handle successful login
      console.log('Logged in:', user);
    } else {
      // Handle invalid credentials
      console.log('Invalid credentials');
    }
  }
}
