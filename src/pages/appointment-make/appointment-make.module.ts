import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarModule } from "ion2-calendar";
import { AppointmentMakePage } from './appointment-make';

@NgModule({
  declarations: [
    AppointmentMakePage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentMakePage),
    CalendarModule,
  ],
})
export class AppointmentMakePageModule {}
