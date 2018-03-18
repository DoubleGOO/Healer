import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterInfoPage } from './register-info';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    RegisterInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterInfoPage),
    MultiPickerModule
  ],
})
export class RegisterInfoPageModule {}
