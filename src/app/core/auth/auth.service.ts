import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl;
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  private authChecked$ = new BehaviorSubject<boolean>(false);
  private initialized = false;

  constructor(private router: Router, private http: HttpClient) {
    this.initAuthCheck();
  }

  
  get isLoggedIn$(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  get authChecked(): Observable<boolean> {
    return this.authChecked$.asObservable();
  }

  checkAuth(): Observable<boolean> {
    return this.http.get(`${this.apiUrl}/auth/profile`, { withCredentials: true }).pipe(
      tap((res) => {
        this.loggedIn$.next(true);
        this.authChecked$.next(true);
      }),
      map(() => true),
      catchError(() => {
        this.loggedIn$.next(false);
        this.authChecked$.next(true);
        return of(false);
      })
    );
  }

  initAuthCheck() {
    if (this.initialized) {
      return;
    }
    
    this.initialized = true;
    this.checkAuth().subscribe();
  }

  login(body: { email: string; password: string; remember: boolean }): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/auth/login`, body, { withCredentials: true })
      .pipe(tap(() => this.loggedIn$.next(true)));
  }

  logout() {
    return this.http
      .post(`${this.apiUrl}/auth/logout`, {}, { withCredentials: true })
      .pipe(tap(() => this.loggedIn$.next(false)));
  }
}
