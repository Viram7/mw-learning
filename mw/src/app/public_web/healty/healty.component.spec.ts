import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealtyComponent } from './healty.component';

describe('HealtyComponent', () => {
  let component: HealtyComponent;
  let fixture: ComponentFixture<HealtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealtyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
