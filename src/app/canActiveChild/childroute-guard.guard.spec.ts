import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { childrouteGuardGuard } from './childroute-guard.guard';

describe('childrouteGuardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => childrouteGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
