import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  signUp(): void {
    const signUpData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    const newUser = this.userService.createUser(signUpData);
    if (newUser) {
      // Handle successful user creation
      console.log('User created:', newUser);
    } else {
      // Handle user creation error
      console.log('Failed to create user');
    }
  }
}
