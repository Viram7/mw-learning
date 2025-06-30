import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadBatchAnnouncementComponent } from './aad-batch-announcement.component';

describe('AadBatchAnnouncementComponent', () => {
  let component: AadBatchAnnouncementComponent;
  let fixture: ComponentFixture<AadBatchAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AadBatchAnnouncementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AadBatchAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
