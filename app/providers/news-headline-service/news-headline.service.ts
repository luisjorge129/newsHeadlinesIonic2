import { Injectable, Inject } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class NewsHeadlineService {

    private key: string;
    private url: string;

    constructor(private http: Http, @Inject('apiKey') key,
                @Inject('apiUrl') url) {
        this.key = key;
        this.url = url;
    }

    getSources() {
        var searchParams = new URLSearchParams();

        searchParams.append('apiKey', this.key);

        return this.http.get(this.url + "sources", {
            search: searchParams }).map(response => {
                return response.json().sources;
            });
    }

    getArticles(source) {
        var searchParams = new URLSearchParams();

        searchParams.append('apiKey', this.key);
        searchParams.append('source', source);

        return this.http.get(this.url + "articles", {
            search: searchParams }).map(response => {
                return response.json();
        });
    }
}

