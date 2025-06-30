import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustStudentComponent } from './trust-student.component';

describe('TrustStudentComponent', () => {
  let component: TrustStudentComponent;
  let fixture: ComponentFixture<TrustStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
