import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    if (!isPlatformBrowser(this.platformId)) {
      return of(true);
    }

    return this.authService.authChecked.pipe(
      switchMap(checked => {
        if (!checked) {
          return this.authService.checkAuth().pipe(
            map(isAuth => isAuth ? true : this.router.parseUrl('/auth/login')),
            catchError(() => of(this.router.parseUrl('/auth/login')))
          );
        }
        
        return this.authService.isLoggedIn$.pipe(
          map(isLoggedIn => isLoggedIn ? true : this.router.parseUrl('/auth/login'))
        );
      })
    );
  }
}

