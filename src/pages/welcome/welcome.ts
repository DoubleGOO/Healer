import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


import { LoginPage } from '../login/login';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  startApp(){
    this.navCtrl.push(LoginPage);
  }

  goNext(speed){
    this.slides.slideNext(speed);
  }

  goPrev(speed){
    this.slides.slidePrev(speed);
  }



}
