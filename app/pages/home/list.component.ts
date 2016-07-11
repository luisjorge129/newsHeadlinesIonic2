import {Component} from '@angular/core';
import {NewsHeadline} from '../home/newsHeadline.service';

@Component({
  selector: 'source-list',
  templateUrl: 'build/pages/home/list.component.html',
  styleUrls: ['/home/list.component.css']
})

export class NewsList {
    constructor (private newsHeadline: NewsHeadline) {}

    // ngOnInit() { this.newsHeadline.getSources(); }    
}