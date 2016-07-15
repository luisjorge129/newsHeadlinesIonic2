import { Component } from '@angular/core';
import { NewsHeadlineService } from '../home/newsHeadline.service';
import { NavController } from 'ionic-angular';
import { sourceArticles } from '../home/sourceDetail.component';

@Component({
    selector: 'source-list',
    templateUrl: 'build/pages/home/list.component.html'
})

export class SourceList {

    sourceList = [];
    articleList = [];
    isLoading: boolean = false;

    constructor(private newsHeadline: NewsHeadlineService,
                private nav: NavController) {
    }

    ngOnInit() {
        this.isLoading = true;
        this.newsHeadline.getSources()
            .subscribe(sourceList => {
                this.sourceList = sourceList;
                this.isLoading = false;
            });
    }

    sourceArticle(source, sourceTitle) {
        this.nav.push(sourceArticles, {
                source: source,
                sourceTitle: sourceTitle
            },
            {
                animation: 'wp-transition',
                direction: 'forward'
            }
        );

    }
}
