import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { MainServerPage } from '../pages/main-server/main-server';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AppointmentPage } from '../pages/appointment/appointment';
import { FindHospitalPage } from '../pages/find-hospital/find-hospital';
import { FindDoctorPage } from '../pages/find-doctor/find-doctor';
import { DoctorPage } from '../pages/doctor/doctor';
import { DrugsPage } from '../pages/drugs/drugs';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { TestIndicatorsPage } from '../pages/test-indicators/test-indicators';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MainServerPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    AppointmentPage,
    FindHospitalPage,
    FindDoctorPage,
    DoctorPage,
    DrugsPage,
    UserProfilePage,
    TestIndicatorsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true', //隐藏全部子页面 tabs
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MainServerPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    AppointmentPage,
    FindHospitalPage,
    FindDoctorPage,
    DoctorPage,
    DrugsPage,
    UserProfilePage,
    TestIndicatorsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}