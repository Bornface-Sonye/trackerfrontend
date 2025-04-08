import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule
  ],
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.scss'
})
export class StudentLoginComponent {
  formData = {
    Username: '',
    Password: '',
  };

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router
  ) {}

  handleLogin() {
    if (!this.formData.Username || !this.formData.Password) {
      this.openSnackbar('Both fields are required.', 'error');
      return;
    }

    this.http.post('http://localhost:8000/user/login/', this.formData).subscribe({
      next: (response: any) => {
        // Save the username to localStorage
        localStorage.setItem('username', this.formData.Username);

        this.openSnackbar(response.message || 'Login successful.', 'success');
        this.router.navigate(['/student/dashboard']); // Redirect to dashboard
      },
      error: (error) => {
        const message = error.error?.message || 'Login failed. Please try again.';
        this.openSnackbar(message, 'error');
      }
    });
  }

  openSnackbar(message: string, severity: 'success' | 'error') {
    const snackBarClass = severity === 'success' ? 'snackbar-success' : 'snackbar-error';
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: snackBarClass,
    });
  }
}
