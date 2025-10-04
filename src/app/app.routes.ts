import { Routes } from '@angular/router';
import { MainComp } from './main-com/main-comp';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main-com/main-comp').then((m) => m.MainComp),
  },
];
