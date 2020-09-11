import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styles: [],
})
export class GamesListComponent implements OnInit {
  constructor(private gameService: GameService) {}
  games: Game[];
  pageItems: Game[];
  pageSize = 5;
  currentPage = 0;
  totalPages = 0;
  ngOnInit(): void {
    this.gameService.getAll().subscribe((games) => {
      this.games = games;
      this.totalPages = Math.ceil(this.games.length / this.pageSize) - 1;
      this.getPageItems();
    });
  }

  getPageItems() {
    const startItem = this.currentPage * this.pageSize;
    this.pageItems = this.games.slice(startItem, startItem + this.pageSize);
  }

  next() {
    if (this.currentPage === this.totalPages) return;
    this.currentPage++;
    this.getPageItems();
  }

  previous() {
    if (this.currentPage === 0) return;
    this.currentPage--;
    this.getPageItems();
  }

  getRank(i) {
    return i + this.currentPage * this.pageSize;
  }
}
