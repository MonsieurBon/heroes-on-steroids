import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IHeroState} from '../store/root.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private HEROES = [
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

  constructor() {
  }

  public getHeroes(): Observable<IHeroState[]> {
    return of(this.HEROES);
  }
}
