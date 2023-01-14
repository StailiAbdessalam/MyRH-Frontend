import { TestBed } from '@angular/core/testing';

import { OauthService } from './oauth.service';

describe('SecurityService', () => {
  let service: OauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
