import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/internal/internal.routes').then(m => m.INTERNAL_ROUTES)
  },
  {
    path: 'auth',
    loadComponent: () => import('./layouts/external/external').then(m => m.External),
    loadChildren: () => import('./core/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
