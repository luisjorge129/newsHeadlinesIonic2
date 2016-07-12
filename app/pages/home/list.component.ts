import {Component} from '@angular/core';
import {NewsHeadlineService} from '../home/newsHeadline.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'source-list',
  templateUrl: 'build/pages/home/list.component.html',
  styleUrls: ['/home/list.component.css'],
  providers:  [NewsHeadlineService, HTTP_PROVIDERS]
})

export class NewsList {
    sourceList = [];

    constructor (private newsHeadline: NewsHeadlineService) {}

    ngOnInit() {
        this.newsHeadline.getSources()
            .subscribe(sourceList => {
                this.sourceList = sourceList;
            });
    }
}