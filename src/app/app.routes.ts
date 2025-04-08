import { Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';

export const routes: Routes = [
    { path: '', component: StudentLoginComponent },
    { path: 'student/login', component: StudentLoginComponent },
];
