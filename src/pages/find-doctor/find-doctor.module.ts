import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindDoctorPage } from './find-doctor';

@NgModule({
  declarations: [
    FindDoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(FindDoctorPage),
  ],
})
export class FindDoctorPageModule {}
