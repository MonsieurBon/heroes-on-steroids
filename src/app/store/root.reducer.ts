import {combineReducers} from 'redux';
import {IAppState} from './root.model';
import {selectedHeroReducer} from './selectedHero.reducer';
import {heroesReducer} from './heroes.reducer';
import {routerReducer} from '@angular-redux/router';

export const rootReducer = combineReducers<IAppState>({
  heroes: heroesReducer,
  selectedHero: selectedHeroReducer,
  router: routerReducer
});
