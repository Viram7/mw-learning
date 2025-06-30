import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBanComponent } from './result-ban.component';

describe('ResultBanComponent', () => {
  let component: ResultBanComponent;
  let fixture: ComponentFixture<ResultBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultBanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
