import { Component, OnInit } from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {IHeroState} from '../store/root.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {map} from 'rxjs/internal/operators';
import {updateSelectedHeroAction} from '../store/hero.action';

@Component({
  selector: 'app-hero-detail-page',
  templateUrl: './hero-detail-page.component.html',
  styleUrls: ['./hero-detail-page.component.css']
})
export class HeroDetailPageComponent implements OnInit {

  @select(['heroes']) heroes$: Observable<IHeroState[]>;
  selectedHero$: Observable<IHeroState>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedHero$ = this.heroes$.pipe(
      map(heroes => heroes.find(hero => hero.id === id))
    );
  }

  @dispatch()
  selectedHeroChanged(hero: IHeroState) {
    return updateSelectedHeroAction(hero);
  }

}
