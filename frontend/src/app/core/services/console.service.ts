import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {ConsoleModel} from '@models/console.model';
import {baseURL} from '../constants/consts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable()
export class ConsoleService {

  constructor(private http: HttpClient) {
  }

  getConsoles(): Observable<ConsoleModel[]> {
    const url = baseURL + 'consoles';
    return this.http.get<ConsoleModel[]>(url, httpOptions);
  }

  getConsole(id: number): Observable<ConsoleModel> {
    const url = baseURL + 'console?id=' + id;
    return this.http.get<ConsoleModel>(url, httpOptions);
  }

  createConsole(console: ConsoleModel): Observable<any> {
    const url = baseURL + 'create/console/';
    return this.http.post(url, console, httpOptions);
  }

  updateConsole(console: ConsoleModel): Observable<any> {
    const url = baseURL + 'update/console/';
    return this.http.put(url, console, httpOptions);
  }

  deleteConsole(console: ConsoleModel): Observable<any> {
    const url = baseURL + 'delete/console/' + console.id + '/';
    return this.http.delete<ConsoleModel>(url, httpOptions);
  }
}
