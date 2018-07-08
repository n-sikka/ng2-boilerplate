import { TestBed, inject } from '@angular/core/testing';

import { AuthFacade } from './auth-facade.service';

describe('AuthFacade', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthFacade]
    });
  });

  it('should be created', inject([AuthFacade], (service: AuthFacade) => {
    expect(service).toBeTruthy();
  }));
});
