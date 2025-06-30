import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCatComponent } from './exam-cat.component';

describe('ExamCatComponent', () => {
  let component: ExamCatComponent;
  let fixture: ComponentFixture<ExamCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
