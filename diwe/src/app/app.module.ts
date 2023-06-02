import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OrderByVotesPipe } from './order-by-votes.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component'; //using auth guard to simulate authentication on the front end as stackblitz is limiting our back end capabilities (database,authentication ...)

// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyD337baqCKEZFBX5fDCM-zCAiHaavyIkFw',
//   authDomain: 'diwe-c9fec.firebaseapp.com',
//   projectId: 'diwe-c9fec',
//   storageBucket: 'diwe-c9fec.appspot.com',
//   messagingSenderId: '56694002892',
//   appId: '1:56694002892:web:bafa7523a9d99534ddde69',
//   measurementId: 'G-WXW8YPL053',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderByVotesPipe,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
