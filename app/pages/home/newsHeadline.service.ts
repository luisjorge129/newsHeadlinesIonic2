import { Injectable, Inject } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsHeadlineService {

  constructor (private http: Http, @Inject('apiKey') key) {
      this.key = key;
  }

  getSources () {
    var searchParams = new URLSearchParams();

    searchParams.append('apiKey', this.key);

    return this.http.get(this.newsUrl + "sources",
            { search: searchParams })
            .map(response => {
                return response.json().sources
            });
   }

   getArticles(source) {
    var searchParams = new URLSearchParams();

    searchParams.append('apiKey', this.key);
    searchParams.append('source', source);

    return this.http.get(this.newsUrl + "articles",
            { search: searchParams })
            .map(response => {
                return response.json().articles
            });
   }

  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || { };
  // }
  // private handleError (error: any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   // We'd also dig deeper into the error to get a better message
  //   let errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg); // log to console instead
  //   return Observable.throw(errMsg);
  // }

    private key: string;
    private newsUrl = 'https://newsapi.org/v1/';
}