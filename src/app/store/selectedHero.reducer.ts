import {IHeroState} from './root.model';
import {AnyAction} from 'redux';
import {HeroActionTypes} from './hero.action';

export function selectedHeroReducer(state: IHeroState = null, action: AnyAction): IHeroState {
  switch (action.type) {
    case HeroActionTypes.HeroSelectedAction:
      return action.payload;
    case HeroActionTypes.UpdateSelectedHeroAction:
      return action.payload;
  }
  return state;
}
