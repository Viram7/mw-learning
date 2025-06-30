import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPannalComponent } from './admin-pannal.component';

describe('AdminPannalComponent', () => {
  let component: AdminPannalComponent;
  let fixture: ComponentFixture<AdminPannalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPannalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPannalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
