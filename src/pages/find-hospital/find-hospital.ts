import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FindHospitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-hospital',
  templateUrl: 'find-hospital.html',
})
export class FindHospitalPage {

  public event = {
    month: '2018-03-17',
    timeStarts: '07:43',
    timeEnds: '2018-03-17'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindHospitalPage');
  }

}
