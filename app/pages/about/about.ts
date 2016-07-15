import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(private navController: NavController) {
  }

  openInBrowser(url){
    InAppBrowser.open(url, "_system", "location=true");
  }
}
