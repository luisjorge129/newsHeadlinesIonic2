import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { NewsSourceDetailPage } from "../../pages/news-source-detail/news-source-detail";
import { NewsHeadlineService } from "../../providers/news-headline-service/news-headline.service";

@Component({
    selector: 'news-source-list',
    templateUrl: 'build/components/news-source-list/news-source-list.component.html'
})
export class NewsSourceList {

    sourceList = [];
    articleList = [];
    isLoading: boolean = false;

    constructor(private newsHeadline: NewsHeadlineService,
                private nav: NavController) {
    }

    ngOnInit() {
        this.isLoading = true;
        this.newsHeadline.getSources().subscribe(sourceList => {
            this.sourceList = sourceList;
            this.isLoading = false;
        });
    }

    sourceArticle(source, sourceTitle) {
        this.nav.push(NewsSourceDetailPage, {
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