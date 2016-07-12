import {Component} from '@angular/core';
import {NewsHeadlineService} from '../home/newsHeadline.service';

@Component({
  selector: 'source-list',
  templateUrl: 'build/pages/home/list.component.html',
  styleUrls: ['/home/list.component.css'],
})

export class NewsList {
    sourceList = [];

    constructor (private newsHeadline: NewsHeadlineService) {}

    ngOnInit() {
        this.newsHeadline.getSources()
            .subscribe(sourceList => {
                this.sourceList = sourceList;
            });
        console.log(this.sourceList);
    }
}