import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';
import { AppointmentPage } from '../appointment/appointment';
import { FindHospitalPage } from '../find-hospital/find-hospital';
import { FindDoctorPage } from '../find-doctor/find-doctor';
import { LoginPage } from '../login/login';


/**
 * Generated class for the MainServerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-server',
  templateUrl: 'main-server.html',
})
export class MainServerPage {

  public welcomeDisplayFlag = true;
  public AppointmentPage = AppointmentPage;
  public FindHospitalPage = FindHospitalPage;
  public FindDoctorPage = FindDoctorPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    if(this.welcomeDisplayFlag){
      this.navCtrl.push(WelcomePage);
      this.welcomeDisplayFlag = false;
    }
    console.log('ionViewDidLoad MainServerPage');

  }
  ionViewWillEnter(){

  }
  ionViewDidEnter(){

  }
  exit(){
    let confirm = this.alertCtrl.create({
      message: 'Are you sure you want to exit?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {

          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.push(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
