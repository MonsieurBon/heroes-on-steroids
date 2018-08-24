import {IHeroState} from './root.model';
import {AnyAction} from 'redux';
import {HeroActionTypes} from './hero.action';

const INITIAL_STATE: IHeroState[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];

export function heroesReducer(state: IHeroState[] = INITIAL_STATE, action: AnyAction): IHeroState[] {
  switch (action.type) {
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
