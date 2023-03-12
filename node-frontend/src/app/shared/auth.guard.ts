import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _auth:AuthService,
    private _router:Router ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  if(this._auth.LogIN()){
    return true;
  }
  /*else if (localStorage.getItem('username') != null && (state.url === '/login' || state.url === '/register')){
    return true;
  }*/

  else if (localStorage.getItem('username') != null && (state.url === '/login' || state.url === '/register')) {
    // user has their username stored in local storage, don't allow access to login and register
    this._router.navigateByUrl('/');
    return false;
  }

  else{
    this._router.navigateByUrl('/login')
    return false;
  }
  }
}
