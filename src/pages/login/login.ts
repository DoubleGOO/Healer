import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: "If you check this box, your password will be saved on the device. Do not use it on public devices or on other people's devices.",
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    toast.present();
  }

  goRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

  goRootPage(){
    this.navCtrl.popToRoot();
  }

}


