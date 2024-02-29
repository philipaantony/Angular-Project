import { CanActivateChildFn } from '@angular/router';

export const childrouteGuardGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
