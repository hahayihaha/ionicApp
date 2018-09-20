import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TalkPage } from './talk';

@NgModule({
  declarations: [
    TalkPage,
  ],
  imports: [
    IonicPageModule.forChild(TalkPage),
  ],
  exports: [
  	TalkPage
  ]
})
export class TalkPageModule {}
