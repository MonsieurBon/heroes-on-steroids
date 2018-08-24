import {Component, OnInit} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {loadHeroesAction} from './store/http.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  ngOnInit(): void {
    this.loadHeroes();
  }

  @dispatch()
  loadHeroes() {
    return loadHeroesAction();
  }
}
