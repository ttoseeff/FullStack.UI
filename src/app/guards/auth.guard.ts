import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  var userService = inject(UsersService);
  var router = inject(Router);
  if(userService.isLoggedIn()){
    return true;
  }
  router.navigateByUrl('/login');
  return false;
};
