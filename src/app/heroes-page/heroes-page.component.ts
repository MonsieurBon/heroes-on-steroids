import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {IHeroState} from '../store/root.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css']
})
export class HeroesPageComponent implements OnInit {

  @select(['heroes']) heroes$: Observable<IHeroState[]>;

  constructor() { }

  ngOnInit() {
  }

}
