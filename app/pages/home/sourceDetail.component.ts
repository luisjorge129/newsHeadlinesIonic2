import {Component, Output, EventEmitter} from '@angular/core';
import {NewsHeadlineService} from '../home/newsHeadline.service';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/sourceDetail.component.html'
})
export class OtherPage {
    constructor (private newsHeadline: NewsHeadlineService,
    private nav: NavController) {}

    sourceTitle: string = "Other Page";
    @Output('sourceArticle') sourceArticle = new EventEmitter();

    ngOnInit() {
         event.preventDefault();
                
        // this.newsHeadline.getArticles(this.sourceArticle)
        //     .subscribe(articleList => {
        //         this.articleList = articleList;
        // });
    }
}