import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDpComponent } from './open-dp.component';

describe('OpenDpComponent', () => {
  let component: OpenDpComponent;
  let fixture: ComponentFixture<OpenDpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenDpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
