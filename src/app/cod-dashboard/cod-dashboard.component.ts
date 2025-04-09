import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cod-dashboard',
  standalone:true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './cod-dashboard.component.html',
  styleUrl: './cod-dashboard.component.scss'
})
export class CodDashboardComponent {
  complaints = [
    {
      studentName: 'Jane Smith',
      programme: 'BSc Computer Science',
      course: 'BCS 345',
      semester: 'Semester 2',
      description: 'No exam mark recorded',
      filedAt: '2025-03-18',
      lecturerName: 'Prof. Alan',
      status: 'in progress',
      codComment: '',
      lecturerComment: '',
      updatedAt: ''
    }
  ];  

  statusOptions = ['in progress', 'completed', 'pending'];

  studentCourses = ['Course 1', 'Course 2', 'Course 3'];

  newComplaint = {
    studentName: '',
    programme: '',
    course: '',
    semester: '',
    description: ''
  };

  updateComplaint(complaint: any) {
    console.log('Updating complaint:', complaint);
  }

  fileComplaint() {
    console.log('Filing complaint');
  }

  updateCodComment(complaint: any) {
    complaint.codCommentedAt = new Date().toISOString().split('T')[0];
    console.log('CoD comment added:', complaint);
  }
}
