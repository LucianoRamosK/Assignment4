import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  currentUser: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  login(): void {
    const loggedIn = this.userService.login(this.email, this.password);
    if (loggedIn) {
      // Redirect to /home
      this.router.navigate(['/logout']);
    } else {
      // Handle invalid credentials
      console.log('Invalid credentials');
    }
  }
}
