import { TestBed } from '@angular/core/testing';

import { LoginResposeService } from './login-respose.service';

describe('LoginResposeService', () => {
  let service: LoginResposeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginResposeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
