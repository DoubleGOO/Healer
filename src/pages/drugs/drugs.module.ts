import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiPickerModule } from 'ion-multi-picker';
import { DrugsPage } from './drugs';

@NgModule({
  declarations: [
    DrugsPage,
  ],
  imports: [
    IonicPageModule.forChild(DrugsPage),
    MultiPickerModule
  ],
})
export class DrugsPageModule {}
