import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions, DayConfig } from "ion2-calendar";

/**
 * Generated class for the AppointmentMakePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment-make',
  templateUrl: 'appointment-make.html',
})
export class AppointmentMakePage {

  date = new Date(2018,2,22);
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  public doctorList=[
    {
      pic:'assets/imgs/pixta_19279319_M.png',
      info:'Periodic health checks',
      time:'11:00AM-01:25PM',
    },
    {
      pic:'assets/imgs/pixta_21931547_M.png',
      info:'Treating Neck',
      time:'11:00AM-01:25PM',
    },
    {
      pic:'assets/imgs/pixta_19791094_M.png',
      info:'Periodic health checks',
      time:'11:00AM-01:25PM',
    },
    {
      pic:'assets/imgs/pixta_19279319_M.png',
      info:'Gynecological',
      time:'11:00AM-01:25PM',
    },
    {
      pic:'assets/imgs/pixta_21931547_M.png',
      info:'Periodic health checks',
      time:'11:00AM-01:25PM',
    },
    {
      pic:'assets/imgs/pixta_19791094_M.png',
      info:'Treating Neck',
      time:'11:00AM-01:25PM',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentMakePage');
  }

  /*上拉更新*/
  doInfinite(infiniteScroll){  /*接收事件对象传值*/
    // console.log('11111')

    this.addDoctor();
    console.log('页面加载');
    infiniteScroll.complete();

    if(this.doctorList.length>60){
      infiniteScroll.enable(false);
    }

  }

  onChange($event) {
    console.log($event);
  }

  goBack(){
    this.navCtrl.pop();
  }

  addDoctor(){
    for(var i =1000;i>0;i--){
      for(var j =10000;j>0;j--){
        ;
      }

    }

    this.doctorList.push({
      pic:'assets/imgs/pixta_19791094_M.png',
      info:'Periodic health checks',
      time:'11:00AM-01:25PM',
    });
    this.doctorList.push({
      pic:'assets/imgs/pixta_21931547_M.png',
      info:'Treating Neck',
      time:'11:00AM-01:25PM',
    });
    this.doctorList.push({
      pic:'assets/imgs/pixta_19279319_M.png',
      info:'Periodic health checks',
      time:'11:00AM-01:25PM',
    });
    this.doctorList.push({
      pic:'assets/imgs/pixta_19791094_M.png',
      info:'Gynecological',
      time:'11:00AM-01:25PM',
    });
    this.doctorList.push({
      pic:'assets/imgs/pixta_21931547_M.png',
      info:'Periodic health checks',
      time:'11:00AM-01:25PM',
    });
    this.doctorList.push({
      pic:'assets/imgs/pixta_19279319_M.png',
      info:'Gynecological',
      time:'11:00AM-01:25PM',
    });
  }
}
