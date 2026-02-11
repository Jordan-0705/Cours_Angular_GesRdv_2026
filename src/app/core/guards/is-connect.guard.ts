import { CanActivateFn, Router } from '@angular/router';
import { SecurityService } from '../services/security.service';
import { inject } from '@angular/core';

export const isConnectGuard: CanActivateFn = (route, state) => {
  let securityService: SecurityService = inject(SecurityService);
  let router = inject(Router);
  if (!securityService.isAuthenticated()) {
    router.navigate(['/public/login']);
    return false;
  }
  return true;
};
