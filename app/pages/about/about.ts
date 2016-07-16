import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { DevsModel } from '../../models/devs-model';

@Component({
    templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {

    devs: DevsModel[] = [];

    constructor(private navController: NavController) {
        this.devs.push(
            new DevsModel('Luis J. Perez', 'img/luis.jpg', 'https://pr.linkedin.com/in/luisjorge129'),
            new DevsModel('Jose I. Marquez', 'img/jose.jpg', 'https://www.linkedin.com/in/ivannetwork'),
            new DevsModel('Jorge L. Perez', 'img/jorge.jpg', 'https://pr.linkedin.com/in/perezjorge718/en')
        );
    }

    openInBrowser(dev: DevsModel) {
        InAppBrowser.open(dev.linkedInUrl, "_system", "location=true");
    }
}
