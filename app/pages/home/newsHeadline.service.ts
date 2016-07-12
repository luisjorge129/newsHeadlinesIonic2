import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Injectable }     from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class NewsHeadline {
    constructor(private http: Http) {
    }

    private newsUrl = 'https://newsapi.org/v1/';  // URL to web API

    getSources() {
        var searchParams = new URLSearchParams();

        searchParams.append('apiKey', 'f47ec438629b40af849f1d74828da59a');

        console.log(this.newsUrl + "sources",
            { search: searchParams });

        return this.http.get(this.newsUrl + "sources",
            { search: searchParams })
            .toPromise()
            .then(response => response.json().data);
    }

    getArticles(source) {
        var searchParams = new URLSearchParams();

        searchParams.append('apiKey', 'f47ec438629b40af849f1d74828da59a');
        searchParams.append('source', source);

        return this.http.get(this.newsUrl + "articles",
            { search: searchParams })
            .toPromise()
            .then(response => response.json().data);
    }

    private extractData(res: Response) {
        let body = res.json();

        return body.data || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead

        return Observable.throw(errMsg);
    }
}