import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsInfoComponent } from './student-details-info.component';

describe('StudentDetailsInfoComponent', () => {
  let component: StudentDetailsInfoComponent;
  let fixture: ComponentFixture<StudentDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDetailsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
