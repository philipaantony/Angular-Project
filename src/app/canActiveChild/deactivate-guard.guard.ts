import { CanDeactivateFn } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

export const deactivateGuardGuard: CanDeactivateFn<ParentComponent> = (component, currentRoute, currentState, nextState) => {
  if(component.idDeact)
  {
    return window.confirm("Are you want to go back");
  }
  return true;
};
