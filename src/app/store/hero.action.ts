import {IHeroState} from './root.model';
import {AnyAction} from 'redux';

export enum HeroActionTypes {
  HeroSelectedAction = '[Hero] Hero Selected',
  UpdateSelectedHeroAction = '[Hero] Update Selected Hero'
}

export const heroSelectedAction = (hero: IHeroState): AnyAction => ({
  type: HeroActionTypes.HeroSelectedAction,
  payload: hero
});

export const updateSelectedHeroAction = (hero: IHeroState): AnyAction => ({
  type: HeroActionTypes.UpdateSelectedHeroAction,
  payload: hero
});
