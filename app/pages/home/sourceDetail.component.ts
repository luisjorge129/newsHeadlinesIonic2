import {Component} from '@angular/core';
import {NewsHeadlineService} from '../home/newsHeadline.service';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/sourceDetail.component.html'
})
export class sourceArticles {
    constructor (private newsHeadline: NewsHeadlineService,
    private nav: NavController, private params: NavParams) {}

    ngOnInit() {
        event.preventDefault();
                
        var source = this.params.get('source');
        this.sourceTitle = this.params.get('sourceTitle');
        
        console.log(this.sourceTitle);
        this.newsHeadline.getArticles(source)
            .subscribe(articleList => {
                this.articleList = articleList;
        });
    }

    goBack() {
        this.nav.pop();
    }

    openArticle(article){

    }

    articleList = [];
    sourceTitle:string = "";
}