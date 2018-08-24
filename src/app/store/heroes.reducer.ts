import {IHeroState} from './root.model';
import {AnyAction} from 'redux';
import {HeroActionTypes} from './hero.action';
import {HttpActionTypes} from './http.actions';

export function heroesReducer(state: IHeroState[] = [], action: AnyAction): IHeroState[] {
  switch (action.type) {
    case HttpActionTypes.HeroesLoadedAction:
      return action.payload;
    case HeroActionTypes.UpdateSelectedHeroAction:
      const updatedHero: IHeroState = action.payload;
      return state.map(hero => {
        if (hero.id === updatedHero.id) {
          return updatedHero;
        }

        return hero;
      });
  }
  return state;
}
