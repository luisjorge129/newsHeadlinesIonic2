import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { NewsSourceList } from "../../components/news-source-list/news-source-list.component";

@Component({
    directives: [NewsSourceList],
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    constructor(private navController: NavController) {
    }
}
