import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NewsList} from '../home/list.component';

@Component({
  directives: [NewsList],
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {}
}
