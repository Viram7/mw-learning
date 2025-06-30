import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuBatchComponent } from './stu-batch.component';

describe('StuBatchComponent', () => {
  let component: StuBatchComponent;
  let fixture: ComponentFixture<StuBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuBatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
