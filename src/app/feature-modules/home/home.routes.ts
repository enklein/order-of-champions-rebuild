import { Routes } from '@angular/router';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
 
export const HomeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeContainerComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];