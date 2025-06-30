import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceStudyComponent } from './cource-study.component';

describe('CourceStudyComponent', () => {
  let component: CourceStudyComponent;
  let fixture: ComponentFixture<CourceStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourceStudyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourceStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
