import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HomeAboutComponent } from './components/home-about/home-about.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HomeContainerComponent, HomeHeaderComponent, HomeFeaturesComponent, HomeAboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(HomeRoutes),
  ]
})
export class HomeModule { }
