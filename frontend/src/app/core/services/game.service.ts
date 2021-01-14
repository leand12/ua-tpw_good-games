import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {GameModel} from '@models/game.model';
import {baseURL} from '../constants/consts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable()
export class GameService {

  constructor(private http: HttpClient) {
  }

  getGames(): Observable<GameModel[]> {
    const url = baseURL + 'games';
    return this.http.get<GameModel[]>(url, httpOptions);
  }

  getGame(id: number): Observable<GameModel> {
    const url = baseURL + 'game?id=' + id;
    return this.http.get<GameModel>(url, httpOptions);
  }

  createGame(game: GameModel): Observable<any> {
    const url = baseURL + 'create/game/';
    return this.http.post(url, game, httpOptions);
  }

  updateGame(game: GameModel): Observable<any> {
    const url = baseURL + 'update/game/';
    return this.http.put(url, game, httpOptions);
  }

  deleteGame(game: GameModel): Observable<any> {
    const url = baseURL + 'delete/game/' + game.id + '/';
    return this.http.delete<GameModel>(url, httpOptions);
  }
}