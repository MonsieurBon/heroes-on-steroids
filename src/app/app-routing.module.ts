import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesPageComponent} from './heroes-page/heroes-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailPageComponent} from './hero-detail-page/hero-detail-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesPageComponent },
  { path: 'detail/:id', component: HeroDetailPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
