import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SourceList} from '../home/list.component';

@Component({
  directives: [SourceList],
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {}
}
