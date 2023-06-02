import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

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
      this.router.navigate(['/login']);
    } else {
      // Handle user creation error
      console.log('Failed to create user');
    }
  }
}
