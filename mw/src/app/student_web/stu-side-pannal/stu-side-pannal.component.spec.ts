import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuSidePannalComponent } from './stu-side-pannal.component';

describe('StuSidePannalComponent', () => {
  let component: StuSidePannalComponent;
  let fixture: ComponentFixture<StuSidePannalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuSidePannalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuSidePannalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
