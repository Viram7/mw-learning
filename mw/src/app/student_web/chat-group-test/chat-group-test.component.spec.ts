import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupTestComponent } from './chat-group-test.component';

describe('ChatGroupTestComponent', () => {
  let component: ChatGroupTestComponent;
  let fixture: ComponentFixture<ChatGroupTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatGroupTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatGroupTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
