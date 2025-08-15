import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './internal-components/nav-bar/nav-bar';
import { AuthService } from '../../core/auth/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-internal',
  imports: [RouterOutlet, NavBar, AsyncPipe],
  templateUrl: './internal.html',
  styleUrl: './internal.scss',
})
export class Internal {
  private readonly authService = inject(AuthService);
  isLoggedIn$ = this.authService.isLoggedIn$;
  isAuthChecked$ = this.authService.authChecked;
    
}
