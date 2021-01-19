import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import {baseURL} from '@core/constants/url';
import {ItemModel} from '@core/models/item.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable()
export class ItemService {

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<ItemModel[]> {
    const url = baseURL + 'items/';
    return this.http.get<ItemModel[]>(url, httpOptions);
  }

  getFilteredItems(pertainingArticle?: number): Observable<ItemModel[]> {
    let url = baseURL + 'items/?';
    if (pertainingArticle !== undefined) {
      url += 'pertaining_article=' + pertainingArticle;
    }
    return this.http.get<ItemModel[]>(url, httpOptions);
  }

  getItem(id: number): Observable<ItemModel> {
    const url = baseURL + 'item/?id=' + id;
    return this.http.get<ItemModel>(url, httpOptions);
  }
}
