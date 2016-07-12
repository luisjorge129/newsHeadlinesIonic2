import {Component} from '@angular/core';
import {NewsHeadlineService} from '../home/newsHeadline.service';
import {NavController} from 'ionic-angular';
import {OtherPage} from '../home/sourceDetail.component';

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

    sourceArticle(event){        
        this.nav.push(OtherPage);
    }
}
