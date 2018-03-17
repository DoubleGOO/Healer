import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {

  public doctorList=[
    {
      pic:'assets/imgs/pixta_19791094_M.png',
      name:'May Hampton',
      info:'Cardiologist',
      position:'0.8',
      score:'5.0'
    },
    {
      pic:'assets/imgs/pixta_19279319_M.png',
      name:'Fannie Larson',
      info:'Gynecological',
      position:'1.5',
      score:'4.8'
    },
    {
      pic:'assets/imgs/pixta_21931547_M.png',
      name:'Della Jensen',
      info:'Pediatrician',
      position:'3.8',
      score:'4.9'
    },
    {
      pic:'assets/imgs/pixta_19791094_M.png',
      name:'May Hampton',
      info:'Cardiologist',
      position:'0.8',
      score:'5.0'
    },
    {
      pic:'assets/imgs/pixta_19279319_M.png',
      name:'Fannie Larson',
      info:'Gynecological',
      position:'1.5',
      score:'4.8'
    },
    {
      pic:'assets/imgs/pixta_21931547_M.png',
      name:'Della Jensen',
      info:'Pediatrician',
      position:'3.8',
      score:'4.9'
    },
    {
      pic:'assets/imgs/pixta_19791094_M.png',
      name:'May Hampton',
      info:'Cardiologist',
      position:'0.8',
      score:'5.0'
    },
    {
      pic:'assets/imgs/pixta_19279319_M.png',
      name:'Fannie Larson',
      info:'Gynecological',
      position:'1.5',
      score:'4.8'
    },
    {
      pic:'assets/imgs/pixta_21931547_M.png',
      name:'Della Jensen',
      info:'Pediatrician',
      position:'3.8',
      score:'4.9'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorPage');
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

  goDelete(index){

    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to delete it?',
      message: 'After deleting, you will not see the doctor in this list, make sure to click yes, otherwise click cancel.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {

          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.doctorList.splice(index,1);
          }
        }
      ]
    });
    confirm.present();
  }

  addDoctor(){
    for(var i =1000;i>0;i--){
      for(var j =10000;j>0;j--){
        ;
      }

    }

    this.doctorList.push({
      pic:'assets/imgs/pixta_19791094_M.png',
      name:'May Hampton',
      info:'Cardiologist',
      position:'0.8',
      score:'5.0'
    });
    this.doctorList.push({
      pic:'assets/imgs/pixta_19279319_M.png',
      name:'Fannie Larson',
      info:'Gynecological',
      position:'1.5',
      score:'4.8'
    });
    this.doctorList.push({
      pic:'assets/imgs/pixta_21931547_M.png',
      name:'Della Jensen',
      info:'Pediatrician',
      position:'3.8',
      score:'4.9'
    });
    this.doctorList.push({
      pic:'assets/imgs/pixta_19791094_M.png',
      name:'May Hampton',
      info:'Cardiologist',
      position:'0.8',
      score:'5.0'
    });
    this.doctorList.push({
      pic:'assets/imgs/pixta_19279319_M.png',
      name:'Fannie Larson',
      info:'Gynecological',
      position:'1.5',
      score:'4.8'
    });
    this.doctorList.push({
      pic:'assets/imgs/pixta_21931547_M.png',
      name:'Della Jensen',
      info:'Pediatrician',
      position:'3.8',
      score:'4.9'
    });
  }

}
