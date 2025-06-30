import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChatGroupComponent } from './admin-chat-group.component';

describe('AdminChatGroupComponent', () => {
  let component: AdminChatGroupComponent;
  let fixture: ComponentFixture<AdminChatGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminChatGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChatGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
