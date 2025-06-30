import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNextComponent } from './card-next.component';

describe('CardNextComponent', () => {
  let component: CardNextComponent;
  let fixture: ComponentFixture<CardNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
