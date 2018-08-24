import {IHeroState} from './root.model';
import {AnyAction} from 'redux';
import {HeroActionTypes} from './hero.action';

const INITIAL_STATE: IHeroState = {
  id: 1,
  name: 'Windstorm'
};

export function heroReducer(state: IHeroState = INITIAL_STATE, action: AnyAction): IHeroState {
  switch (action.type) {
    case HeroActionTypes.UpdateHeroAction:
      return action.payload;
  }
  return state;
}
