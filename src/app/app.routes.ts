import { Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentForgotComponent } from './student-forgot/student-forgot.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentComplaintsComponent } from './student-complaints/student-complaints.component';

export const routes: Routes = [
    { path: '', component: StudentLoginComponent },
    { path: 'student/login', component: StudentLoginComponent },
    { path: 'student/signup', component: StudentSignupComponent },
    { path: 'student/forgot', component: StudentForgotComponent },
    { path: 'student/dashboard', component: StudentDashboardComponent },
    { path: 'student/complaints', component: StudentComplaintsComponent },
];
