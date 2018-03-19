import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainServerPage } from './main-server';


@NgModule({
  declarations: [
    MainServerPage,
  ],
  imports: [
    IonicPageModule.forChild(MainServerPage),
  ],
})
export class MainServerPageModule {}
