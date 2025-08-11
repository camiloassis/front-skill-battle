// internal.routes.ts
import { Routes } from '@angular/router';

export const INTERNAL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./internal').then(m => m.Internal),
    children: [
      {
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
