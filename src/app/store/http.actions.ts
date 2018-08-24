import {IHeroState} from './root.model';

export enum HttpActionTypes {
  LoadHeroesAction = '[HTTP] Load Heroes',
  HeroesLoadedAction = '[HTTP] Heroes Loaded'
}

export const loadHeroesAction = () => ({
  type: HttpActionTypes.LoadHeroesAction
});

export const heroesLoadedAction = (heroes: IHeroState[]) => ({
  type: HttpActionTypes.HeroesLoadedAction,
  payload: heroes
});
