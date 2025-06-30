import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuStudyComponent } from './stu-study.component';

describe('StuStudyComponent', () => {
  let component: StuStudyComponent;
  let fixture: ComponentFixture<StuStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuStudyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
