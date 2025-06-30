import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCorosolComponent } from './home-corosol.component';

describe('HomeCorosolComponent', () => {
  let component: HomeCorosolComponent;
  let fixture: ComponentFixture<HomeCorosolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCorosolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCorosolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
