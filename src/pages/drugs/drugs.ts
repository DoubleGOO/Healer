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

  public event = {
    month: '2018-03-17',
    timeStarts: '07:43',
    timeEnds: '2018-03-17'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrugsPage');
    document.getElementById('button1').click();
  }
  add(){
    alert('1');
  }
  delete(){
    this.navCtrl.push(DrugsPage);
  }
}
//第一页选性别  第二页选体重（单栏） 在第二页最下方加一个width100%的item  点击触发  触发的图标可以在item上面相对定位下去
