import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { IndexPage } from './index';

@NgModule({
  declarations: [
    IndexPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexPage),
    TranslateModule.forChild()
  ],
  exports: [
    IndexPage
  ]
})
export class IndexPageModule {}
