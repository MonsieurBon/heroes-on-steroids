import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHeroState} from '../store/root.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Input() heroes: IHeroState[];
  @Input() selectedHero: IHeroState;

  @Output() selectedHeroChanged = new EventEmitter<IHeroState>();
  @Output() heroSelected = new EventEmitter<IHeroState>();

  constructor() { }

  ngOnInit() {

  }

  onSelect(hero: IHeroState): void {
    this.heroSelected.emit(hero);
  }
}
