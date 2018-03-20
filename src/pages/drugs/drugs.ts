import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DrugsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drugs',
  templateUrl: 'drugs.html',
})
export class DrugsPage {

  date = new Date(2018,2,22);
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'


  constructor(public navCtrl: NavController, public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrugsPage');
  }

}
//日历插件说明http://www.ctolib.com/HsuanXyz-ion2-calendar.html


