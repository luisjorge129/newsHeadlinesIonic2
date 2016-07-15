import { Component } from '@angular/core';
import { InAppBrowser } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';
import { NewsHeadlineService } from '../../providers/news-headline-service/news-headline.service';

@Component({
    templateUrl: 'build/pages/news-source-detail/news-source-detail.html',
})
export class NewsSourceDetailPage {

    articleList = [];
    sourceTitle: string = '';
    isLoading: boolean = false;

    constructor(private newsHeadline: NewsHeadlineService,
                private nav: NavController, private params: NavParams) {
    }

    ngOnInit() {
        this.isLoading = true;
        var source = this.params.get('source');
        this.sourceTitle = this.params.get('sourceTitle');

        this.newsHeadline.getArticles(source).subscribe(articleList => {
            this.articleList = articleList;
            this.isLoading = false;
        });
    }

    goBack() {
        this.nav.pop();
    }

    openArticle(articleUrl) {
        InAppBrowser.open(articleUrl, '_system', 'location=true');
    }
}