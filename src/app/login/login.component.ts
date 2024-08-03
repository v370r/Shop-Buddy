import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      // Redirect to another page on successful login
      this.router.navigate(['/home']); // Update with the desired route
    } else {
      // Show an error message on failure
      this.errorMessage = 'Wrong username or password';
    }
  }

}
