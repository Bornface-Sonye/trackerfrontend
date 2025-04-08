import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-login',
  standalone:true,
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
    private snackBar: MatSnackBar
  ) { }

  // Handles the login process
  handleLogin() {
    // Basic validation for empty fields
    if (!this.formData.Username || !this.formData.Password) {
      this.openSnackbar('Both fields are required.', 'error');
      return;
    }
  }

  // Utility method to show snackbar notifications
  openSnackbar(message: string, severity: 'success' | 'error') {
    const snackBarClass = severity === 'success' ? 'snackbar-success' : 'snackbar-error';
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: snackBarClass,
    });
  }
}
