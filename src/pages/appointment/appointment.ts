import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {
  public date={
    month:1,
    day:1
  }

  public monthList=[];
  public dayList=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
    this.initDate();
  }

  initDate(){
    for(var i = 1;i<=12;i++){
      this.monthList.push(i);
    }
    for(var j = 1;j<=31;j++){
      this.dayList.push(j);
    }

  }

}
