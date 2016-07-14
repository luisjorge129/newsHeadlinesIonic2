import {Component} from '@angular/core';
import {NewsHeadlineService} from '../home/newsHeadline.service';
import {NavController, NavParams} from 'ionic-angular';
import {SafariViewController} from 'ionic-native';

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
        
        this.newsHeadline.getArticles(source)
            .subscribe(articleList => {
                this.articleList = articleList;
        });
    }

    goBack() {
        this.nav.pop();
    }

    openArticle(articleUrl){
        SafariViewController.isAvailable()
            .then((available) => {
                if(available){
                    console.log("Is Available");
                    SafariViewController.show({
                        url: articleUrl,
                        hidden: false,
                        animated: false,
                        transition: 'curl',
                        enterReaderModeIfAvailable: true,
                        tintColor: '#ff0000'
                    })
                    .then(
                    (result: any) => {
                        if(result.event === 'opened') console.log("Opened");
                        else if(result.event === 'loaded') console.log("Loaded");
                        else if(result.event === 'closed') console.log("Closed");
                        console.log("Successfully open...");
                    },
                        (error: any) => console.error(error)
                    );

                } else {
                    console.warn("Safari view controller is not working.");
                    // use fallback browser, example InAppBrowser
                }
            }
        );
    }

    articleList = [];
    sourceTitle:string = "";
}