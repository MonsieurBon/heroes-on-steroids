import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IHeroState} from '../store/root.model';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  @select(state => state.heroes.slice(1, 5)) topHeroes$: Observable<IHeroState[]>;

  constructor() { }

  ngOnInit() {
  }

}
