import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styles: [
    `
      th {
        white-space: nowrap;
      }
    `,
  ],
})
export class GameDetailComponent implements OnInit {
  @Input('game') game: Game;
  @Input('rank') rank: number;
  showDetails = false;
  constructor() {}

  ngOnInit(): void {}
}
