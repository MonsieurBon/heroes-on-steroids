import {combineReducers} from 'redux';
import {IAppState} from './root.model';
import {selectedHeroReducer} from './selectedHero.reducer';
import {heroesReducer} from './heroes.reducer';

export const rootReducer = combineReducers<IAppState>({
  heroes: heroesReducer,
  selectedHero: selectedHeroReducer
});
