import { Routes } from '@angular/router';

export const routes: Routes = [
      {
            path: 'dashboard',
            loadComponent: () =>
                  import(
                        './gifts/pages/dashboard-page/dashboard-page.component'
                  ),
      },
      {
            path: 'trending',
            loadComponent: () =>
                  import('./gifts/pages/trending/trending.component'),
      },
      {
            path: '**',
            redirectTo: 'dashboard',
      },
];
