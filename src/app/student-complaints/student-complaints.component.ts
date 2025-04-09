import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-complaints',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-complaints.component.html',
  styleUrls: ['./student-complaints.component.scss']
})
export class StudentComplaintsComponent implements OnInit {
  complaints: any[] = [];
  newComplaint = { course_id: null, semester_id: null, description: '' };  // Added description
  isModalOpen = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints(): void {
    this.http.get('/api/student/complaints/').subscribe((data: any) => {
      this.complaints = data;
    });
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  submitComplaint(): void {
    this.http.post('/api/student/complaints/', this.newComplaint).subscribe(() => {
      this.newComplaint = { course_id: null, semester_id: null, description: '' };  // Reset description
      this.loadComplaints();
      this.closeModal();  // Close the modal after submission
    });
  }
}
