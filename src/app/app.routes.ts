import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Map } from './pages/map/map';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'map',
    component: Map,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: '**',
    component: NotFound,
  },
];
