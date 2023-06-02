import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is authenticated
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return true; // User is authenticated
    }

    // User is not authenticated, redirect to the login page
    this.router.navigate(['/login']);
    return false;
  }
}
