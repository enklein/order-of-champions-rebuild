import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './shared/components/base-layout/base-layout.component';


const routes: Routes = [
    {
      path: 'home',
      component: BaseLayoutComponent,
      loadChildren: () => import('./feature-modules/home/home.module').then((m) => m.HomeModule)
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
