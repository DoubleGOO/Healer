import { Component } from '@angular/core';

import { DoctorPage } from '../doctor/doctor';
import { DrugsPage } from '../drugs/drugs';
import { UserProfilePage } from '../user-profile/user-profile';
import { TestIndicatorsPage } from '../test-indicators/test-indicators';
import { MainServerPage } from '../main-server/main-server';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DrugsPage;
  tab2Root = DoctorPage;
  tab3Root = MainServerPage;
  tab4Root = TestIndicatorsPage;
  tab5Root = UserProfilePage;

  constructor() {

  }

}
