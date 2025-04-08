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
  selector: 'app-student-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
  ],
  templateUrl: './student-signup.component.html',
  styleUrl: './student-signup.component.scss'
})
export class StudentSignupComponent {
  formData = {
    Username: '',
    Email: '',
    PasswordHash: '',
    ConfirmPassword: '',
  };

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router
  ) {}

  handleSubmit(event: Event) {
    event.preventDefault();

    if (!this.formData.Username || !this.formData.Email || !this.formData.PasswordHash || !this.formData.ConfirmPassword) {
      this.openSnackbar('All fields are required.', 'error');
      return;
    }

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/;
    if (!passwordRegex.test(this.formData.PasswordHash)) {
      this.openSnackbar('Password must be at least 8 characters long and contain letters, numbers, and symbols.', 'error');
      return;
    }

    if (this.formData.PasswordHash !== this.formData.ConfirmPassword) {
      this.openSnackbar('Passwords do not match.', 'error');
      return;
    }

    this.http.patch('http://localhost:8000/user/signup/', this.formData).subscribe({
      next: (response: any) => {
        this.openSnackbar(response.message || 'Registration successful.', 'success');
        this.resetForm();
        this.router.navigate(['/student/login']);
      },
      error: (error) => {
        const message = error.error?.message || 'Registration failed. Please try again.';
        this.openSnackbar(message, 'error');
      }
    });
  }

  resetForm() {
    this.formData = {
      Username: '',
      Email: '',
      PasswordHash: '',
      ConfirmPassword: '',
    };
  }

  openSnackbar(message: string, severity: 'success' | 'error') {
    const snackBarClass = severity === 'success' ? 'snackbar-success' : 'snackbar-error';
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: snackBarClass,
    });
  }

  closeSnackbar() {
    this.snackBar.dismiss();
  }
}
