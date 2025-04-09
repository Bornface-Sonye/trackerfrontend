import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  // Dummy data for dashboard
  totalCoursesWithMissingMarks: number = 0;
  totalComplaintsResolved: number = 0;
  totalPendingComplaints: number = 0;
  totalInProgressComplaints: number = 0;

  // Dummy list of student courses
  studentCourses: string[] = ['BCS 134', 'BCS 345', 'BCS 223'];

  // Function to simulate fetching dashboard data
  getDashboardData() {
    // Here we use dummy data to populate the dashboard stats
    this.totalCoursesWithMissingMarks = 5;
    this.totalComplaintsResolved = 10;
    this.totalPendingComplaints = 3;
    this.totalInProgressComplaints = 2;
  }

  ngOnInit() {
    // Call getDashboardData to initialize the dummy data on component load
    this.getDashboardData();
  }

  // Logout method
  logout() {
    localStorage.removeItem('username');
    console.log('Logged out');
    this.router.navigate(['/student/login']);
  }

  constructor(private router: Router) {}
}
