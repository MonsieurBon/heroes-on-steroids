import {Component, OnInit} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {IHeroState} from '../store/root.model';
import {updateSelectedHeroAction} from '../store/hero.action';

@Component({
  selector: 'app-hero-detail-page',
  templateUrl: './hero-detail-page.component.html',
  styleUrls: ['./hero-detail-page.component.css']
})
export class HeroDetailPageComponent implements OnInit {

  @select(['selectedHero']) selectedHero$: Observable<IHeroState>;

  constructor() { }

  ngOnInit() {
  }

  @dispatch()
  selectedHeroChanged(hero: IHeroState) {
    return updateSelectedHeroAction(hero);
  }

}
