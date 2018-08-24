import { Component, OnInit } from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {IHeroState} from '../store/root.model';
import {Observable} from 'rxjs';
import {AnyAction} from 'redux';
import {updateHeroAction} from '../store/hero.action';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css']
})
export class HeroesPageComponent implements OnInit {

  @select(['hero']) hero$: Observable<IHeroState>;

  constructor() { }

  ngOnInit() {
  }

  @dispatch()
  heroChanged(hero: IHeroState): AnyAction {
    return updateHeroAction(hero);
  }

}
