import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuNavbarComponent } from './stu-navbar.component';

describe('StuNavbarComponent', () => {
  let component: StuNavbarComponent;
  let fixture: ComponentFixture<StuNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
