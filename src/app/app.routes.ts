import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./modulo1/pages/dashboard/dashboard.component'),
    
    children: [
      {
        path: 'home',
        loadComponent: () => import('./modulo1/pages/home/home.component'),
      },
        {
        path: 'clients',
        loadComponent: () => import('./modulo1/pages/clients/clients.component'),
      },
      {
        path: 'add-procedure',
        loadComponent: () => import('./modulo1/pages/add-procedure/add-procedure.component'),
      },
      
      {
        path: 'types',
        loadComponent: () => import('./modulo1/pages/types/types.component'),
      },
      {
        path: 'process',
        loadComponent: () => import('./modulo1/pages/process/process.component'),
      },
      {
        path: 'search',
        loadComponent: () => import('./modulo1/pages/search/search.component'),
      },
      {
        path: 'pending-procedures',
        loadComponent: () => import('./modulo1/pages/pending-procedures/pending-procedures.component'),
      },
      {
        path: 'started-procedures',
        loadComponent: () => import('./modulo1/pages/started-procedures/started-procedures.component'),
      },
      {
        path: 'finished-procedures',
        loadComponent: () => import('./modulo1/pages/finished-procedures/finished-procedures.component'),
      },
      {
        path: 'expired-procedures',
        loadComponent: () => import('./modulo1/pages/expired-procedures/expired-procedures.component'),
      },
      {
        path:'rejected-procedures',
        loadComponent:() => import ('./modulo1/pages/rejected-procedures/rejected-procedures.component'), 
      },

       // detalles de los estados
      {
        path: 'pending-detail',
        loadComponent: () => 
          import('./modulo1/pages/pending-procedures/pending-detail/pending-detail.component'),
      },
      {
        path: 'started-detail',
        loadComponent: () => 
          import('./modulo1/pages/started-procedures/started-detail/started-detail.component'),
      },
      {
        path: 'finished-detail',
        loadComponent: () => 
          import('./modulo1/pages/finished-procedures/ finished-detail/ finished-detail.component'),
      },
      {
        path: 'expired-detail',
        loadComponent: () =>
          import('./modulo1/pages/expired-procedures/expired-detail/expired-detail.component'),
      },
      {
        path:'rejected-detail',
        loadComponent: () => import ('./modulo1/pages/rejected-procedures/rejected-detail/rejected-detail.component'),
      },

      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
