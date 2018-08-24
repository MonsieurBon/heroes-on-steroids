import {IHeroState} from './root.model';
import {AnyAction} from 'redux';

export enum HeroActionTypes {
  UpdateHeroAction = '[Hero] Update Hero'
}

export const updateHeroAction = (hero: IHeroState): AnyAction => ({
  type: HeroActionTypes.UpdateHeroAction,
  payload: hero
});
