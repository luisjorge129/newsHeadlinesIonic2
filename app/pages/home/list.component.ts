import {Component} from '@angular/core';
import {NewsHeadlineService} from '../home/newsHeadline.service';
import {NavController} from 'ionic-angular';
import {sourceArticles} from '../home/sourceDetail.component';

@Component({
  selector: 'source-list',
  templateUrl: 'build/pages/home/list.component.html',
})

export class SourceList {
    sourceList = [];
    articleList = [];

    constructor (private newsHeadline: NewsHeadlineService,
    private nav: NavController) {}

    ngOnInit() {
        this.newsHeadline.getSources()
            .subscribe(sourceList => {
                this.sourceList = sourceList;
        });
    }

    sourceArticle(source, sourceTitle){
        this.nav.push(sourceArticles, {
                source: source,
                sourceTitle: sourceTitle
            }
            // {direction: 'forward'}
        );

    }   
}
