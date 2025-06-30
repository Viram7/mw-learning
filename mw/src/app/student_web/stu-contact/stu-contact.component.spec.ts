import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuContactComponent } from './stu-contact.component';

describe('StuContactComponent', () => {
  let component: StuContactComponent;
  let fixture: ComponentFixture<StuContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
