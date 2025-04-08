import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent {
  upcomingAppointments = [
    { name: 'Wiliam Ruto', date: '4th April 2025', time: '10:00 AM', purpose: 'General', location: 'Eldoret Farm', contact: '+254700123456' },
    { name: 'Charlene Ruto', date: '4th April 2025', time: '11:00 AM', purpose: 'General', location: 'Nairobi Dairy', contact: '+254711654321' }
  ];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  acceptAppointment(index: number) {
    console.log(`Accepted appointment for ${this.upcomingAppointments[index].name} at ${this.upcomingAppointments[index].location} on ${this.upcomingAppointments[index].date} at ${this.upcomingAppointments[index].time}`);
  }

  cancelAppointment(index: number) {
    console.log(`Cancelled appointment for ${this.upcomingAppointments[index].name}`);
  }

  // Logout method
  logout() {
    // Remove the username from localStorage
    localStorage.removeItem('username');

    // Call backend to handle the logout process
    this.http.post('http://localhost:8000/user/logout/', {}).subscribe({
      next: (response: any) => {
        console.log(response.message);
        this.router.navigate(['/student/login']); // Redirect to login page after logout
      },
      error: (error) => {
        console.error('Logout failed', error);
      }
    });
  }
}
