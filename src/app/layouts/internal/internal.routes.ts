// internal.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from '../../core/auth/auth.guard';

export const INTERNAL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./internal').then(m => m.Internal),
    children: [
      {
        canActivate: [authGuard],
        path: 'dashboard',
        loadComponent: () =>
          import('./internal-components/dashboard/dashboard').then(m => m.Dashboard),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      }
    ],
  }
];
