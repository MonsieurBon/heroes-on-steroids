import { Component, OnInit } from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {IHeroState} from '../store/root.model';
import {Observable} from 'rxjs';
import {AnyAction} from 'redux';
import {heroSelectedAction, updateSelectedHeroAction} from '../store/hero.action';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css']
})
export class HeroesPageComponent implements OnInit {

  @select(['selectedHero']) selectedHero$: Observable<IHeroState>;
  @select(['heroes']) heroes$: Observable<IHeroState[]>;

  constructor() { }

  ngOnInit() {
  }

  @dispatch()
  selectedHeroChanged(hero: IHeroState): AnyAction {
    return updateSelectedHeroAction(hero);
  }

  @dispatch()
  heroSelected(hero: IHeroState): AnyAction {
    return heroSelectedAction(hero);
  }

}
