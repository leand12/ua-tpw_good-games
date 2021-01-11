import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {ReviewModel} from '@models/review.model';
import {baseURL} from '../constants/consts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReviews(): Observable<ReviewModel[]> {
    const url = baseURL + 'reviews';
    return this.http.get<ReviewModel[]>(url, httpOptions);
  }

  getReviewsFiltered(num = null, rate = null, reviewer = null, reviewed = null): Observable<ReviewModel[]> {
    let url: string = baseURL + 'reviews?';

    if (num != null)
    {
      url += '&num=' + num;
    }

    if (rate != null)
    {
      url += '&rate=' + rate;
    }

    if (reviewer != null)
    {
      url += '&reviewer=' + reviewer;
    }

    if (reviewed != null)
    {
      url += '&reviewed=' + reviewed;
    }

    url += '/';
    return this.http.get<ReviewModel[]>(url, httpOptions);
  }

  getReview(id: number): Observable<ReviewModel> {
    const url = baseURL + 'review?id=' + id;
    return this.http.get<ReviewModel>(url, httpOptions);
  }

}
