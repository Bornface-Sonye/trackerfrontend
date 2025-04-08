import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentForgotComponent } from './student-forgot.component';

describe('StudentForgotComponent', () => {
  let component: StudentForgotComponent;
  let fixture: ComponentFixture<StudentForgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentForgotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
