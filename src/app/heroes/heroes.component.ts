import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IHeroState} from '../store/root.model';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges {

  @Input() heroes: IHeroState[];
  @Input() selectedHero: IHeroState;

  @Output() selectedHeroChanged = new EventEmitter<IHeroState>();
  @Output() heroSelected = new EventEmitter<IHeroState>();

  nameField = new FormControl();

  private heroChange = new Subject<string>();

  constructor() { }

  onHeroNameKeyUp() {
    this.heroChange.next(this.nameField.value);
  }

  ngOnInit() {
    this.heroChange.pipe(
      distinctUntilChanged()
    ).subscribe(name => {
      const hero = { ...this.selectedHero, name };
      this.selectedHeroChanged.emit(hero);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedHero) {
      this.nameField.setValue(this.selectedHero.name);
    }
  }

  onSelect(hero: IHeroState): void {
    this.heroSelected.emit(hero);
  }
}
