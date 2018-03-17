import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestIndicatorsPage } from './test-indicators';

@NgModule({
  declarations: [
    TestIndicatorsPage,
  ],
  imports: [
    IonicPageModule.forChild(TestIndicatorsPage),
  ],
})
export class TestIndicatorsPageModule {}
