import { Component } from '@angular/core';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import { HTTP_PROVIDERS } from '@angular/http';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { NewsHeadlineService } from './pages/home/newsHeadline.service';

@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    providers: [NewsHeadlineService]
})
export class MyApp {

    private rootPage: any;

    constructor(private platform: Platform) {
        this.rootPage = TabsPage;

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}

ionicBootstrap(MyApp, [HTTP_PROVIDERS]);
