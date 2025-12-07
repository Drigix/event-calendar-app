import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/event-calendar-view.component').then(m => m.EventCalendarViewComponent)
  }
];
