import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBatchComponent } from './input-batch.component';

describe('InputBatchComponent', () => {
  let component: InputBatchComponent;
  let fixture: ComponentFixture<InputBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
