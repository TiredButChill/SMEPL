import { Component } from '@angular/core';
import { AuthService } from '../../Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  email: string = '';
  password: string = '';

  login(): void {
    // Add validation
    if (!this.email || !this.password) {
      console.log('Please fill in all fields');
      return;
    }
  
    const payload = {
      email: this.email.trim(),
      password: this.password
    };
  
    console.log('Sending payload:', payload);
  
    this.authService.login(payload)
      .subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Login failed:', error);
          if (error.status === 400) {
            console.log('Invalid email or password');
          }
        }
      });
  }
}
