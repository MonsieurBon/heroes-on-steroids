import {combineReducers} from 'redux';
import {IAppState} from './root.model';
import {heroReducer} from './hero.reducer';

export const rootReducer = combineReducers<IAppState>({
  hero: heroReducer
});
