import {Component, Input, OnInit} from '@angular/core';
import {IHeroState} from '../store/root.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Input() heroes: IHeroState[];

  constructor() { }

  ngOnInit() {

  }
}
