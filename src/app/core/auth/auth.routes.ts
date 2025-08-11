import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
     {
        path: 'login',
        loadComponent: () =>
          import('../../layouts/external/public-components/login/login').then(
            (m) => m.Login
          ),
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
]
