import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Game } from '../models/game';

const url =
  'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get(url)
      .pipe(
        map((response: any) =>
          response.results.map((x: any) => this.mapToGame(x))
        )
      );
  }

  mapToGame({ name, background_image, released, genres, rating }): Game {
    return { name, background_image, released, genres, rating };
  }
}
