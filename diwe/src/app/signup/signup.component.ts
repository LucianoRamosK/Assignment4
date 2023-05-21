import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email: string = ''; // Initialize email with an empty string
  password: string = ''; // Initialize password with an empty string

  constructor(private http: HttpClient) {}

  signUp(): void {
    const signUpData = { email: this.email, password: this.password };
    this.http
      .post(
        'https://nodek7tb9v-qw0m--3000--9c8944bc.local-credentialless.webcontainer.io/api/signup',
        signUpData
      )
      .subscribe(
        (response) => {},
        (error) => {}
      );
  }
}
