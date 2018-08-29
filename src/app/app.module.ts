import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {createLogger} from 'redux-logger';
import {IAppState} from './store/root.model';
import {rootReducer} from './store/root.reducer';
import {HeroesPageComponent} from './heroes-page/heroes-page.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {HttpEpicsService} from './service/http-epics.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailPageComponent } from './hero-detail-page/hero-detail-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {RoutingEpicsService} from './service/routing-epics.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesPageComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroDetailPageComponent,
    DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private ngReduxRouter: NgReduxRouter,
    private devTools: DevToolsExtension,
    private httpEpics: HttpEpicsService,
    private routingEpics: RoutingEpicsService
  ) {
    const rootEpic = combineEpics(
      httpEpics.loadHeroes,
      routingEpics.selectHero
    );

    const epicMiddleware = createEpicMiddleware();

    this.ngRedux.configureStore(
      rootReducer,
      {},
      [epicMiddleware, createLogger()],
      this.devTools.enhancer()
    );

    epicMiddleware.run(rootEpic);

    this.ngReduxRouter.initialize();
  }
}
