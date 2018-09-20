import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TeachPage } from './teach';

@NgModule({
  declarations: [
    TeachPage,
  ],
  imports: [
    IonicPageModule.forChild(TeachPage),
  ],
  exports: [
    TeachPage
  ]
})
export class TeachPageModule {}
