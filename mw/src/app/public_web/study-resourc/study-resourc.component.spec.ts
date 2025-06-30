import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyResourcComponent } from './study-resourc.component';

describe('StudyResourcComponent', () => {
  let component: StudyResourcComponent;
  let fixture: ComponentFixture<StudyResourcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyResourcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyResourcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
