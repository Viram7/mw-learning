import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBatchVideoComponent } from './upload-batch-video.component';

describe('UploadBatchVideoComponent', () => {
  let component: UploadBatchVideoComponent;
  let fixture: ComponentFixture<UploadBatchVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadBatchVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadBatchVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
