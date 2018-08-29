import {Component, Input, OnInit} from '@angular/core';
import {IHeroState} from '../store/root.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() heroes: IHeroState[];

  constructor() { }

  ngOnInit() {
  }
}
