import {Injectable} from '@angular/core';
import {ofType} from 'redux-observable';
import {UPDATE_LOCATION} from '@angular-redux/router';
import {filter, map} from 'rxjs/internal/operators';
import {heroSelectedAction} from '../store/hero.action';
import {AnyAction} from 'redux';
import {IHeroState} from '../store/root.model';

@Injectable({
  providedIn: 'root'
})
export class RoutingEpicsService {

  constructor() { }

  selectHero = (action$, state$) => action$.pipe(
    ofType(UPDATE_LOCATION),
    filter((action: AnyAction) => action.payload.substring(0, 8) === '/detail/'),
    map((action: AnyAction) => action.payload.substring(8)),
    map(id => state$.value.heroes.find(hero => hero.id === +id)),
    map((hero: IHeroState) => heroSelectedAction(hero))
  )
}
