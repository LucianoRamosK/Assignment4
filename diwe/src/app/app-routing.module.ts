import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AskComponent } from './ask/ask.component';
import { AuthGuard } from './auth.guard'; //using this to guard the path to control the access
//https://www.geeksforgeeks.org/auth-guards-in-angular-9-10-11/

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // '' home route
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'ask', component: AskComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
