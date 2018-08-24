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

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesPageComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension
  ) {
    this.ngRedux.configureStore(
      rootReducer,
      {},
      [createLogger()],
      this.devTools.enhancer()
    );
  }
}
