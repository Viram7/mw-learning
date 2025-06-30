import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchDetailsSubComponent } from './batch-details-sub.component';

describe('BatchDetailsSubComponent', () => {
  let component: BatchDetailsSubComponent;
  let fixture: ComponentFixture<BatchDetailsSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchDetailsSubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchDetailsSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
