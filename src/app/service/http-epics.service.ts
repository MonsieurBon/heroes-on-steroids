import {Injectable} from '@angular/core';
import {ofType} from 'redux-observable';
import {map, mapTo, mergeMapTo} from 'rxjs/operators';
import {heroesLoadedAction, HttpActionTypes} from '../store/http.actions';
import {HeroService} from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class HttpEpicsService {

  constructor(
    private heroService: HeroService
  ) {
  }

  loadHeroes = (action$) => action$.pipe(
    ofType(HttpActionTypes.LoadHeroesAction),
    mergeMapTo(this.heroService.getHeroes().pipe(
      map(heroes => heroesLoadedAction(heroes))
    ))
  )
}
