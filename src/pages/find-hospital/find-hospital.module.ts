import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindHospitalPage } from './find-hospital';

@NgModule({
  declarations: [
    FindHospitalPage,
  ],
  imports: [
    IonicPageModule.forChild(FindHospitalPage),
  ],
})
export class FindHospitalPageModule {}
