import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNumComponent } from './update-num.component';

describe('UpdateNumComponent', () => {
  let component: UpdateNumComponent;
  let fixture: ComponentFixture<UpdateNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateNumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
