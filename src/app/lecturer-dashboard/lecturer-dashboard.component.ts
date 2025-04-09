import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-lecturer-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './lecturer-dashboard.component.html',
  styleUrls: ['./lecturer-dashboard.component.scss']
})
export class LecturerDashboardComponent {
  complaints = [
    {
      studentName: 'John Doe',
      course: 'BCS 134',
      description: 'Missing exam mark',
      filedAt: '2025-03-15',
      status: 'pending',
      lecturerComment: ''
    }
  ];

  updateComplaint(complaint: any) {
    complaint.updatedAt = new Date().toISOString().split('T')[0];
    console.log('Complaint updated:', complaint);
  }
}
