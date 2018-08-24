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

  @Input() hero: IHeroState;
  @Output() heroChanged = new EventEmitter<IHeroState>();

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
      const hero = { ...this.hero, name };
      this.heroChanged.emit(hero);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.hero) {
      this.nameField.setValue(this.hero.name);
    }
  }

}
