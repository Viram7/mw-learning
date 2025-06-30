import { TestBed } from '@angular/core/testing';

import { AdminLogResponseService } from './admin-log-response.service';

describe('AdminLogResponseService', () => {
  let service: AdminLogResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLogResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
