import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';

@Component({
  template: `<ion-menu [content]="content">

    <ion-content>
			<!-- div menuList：是主要的菜单部分，这部分是菜单重点 -->
	    <div class="menu-list">
	      <!-- no-lines：取消list的默认线条 -->
	      <ion-list no-lines>
	        <div menuClose="center" ion-item *ngFor="let p of pages;let i=index" (click)="openPage(p)">
	          <ion-icon name="{{p.icon}}" item-left class="iconColor"></ion-icon>
	          {{p.title}}
	        </div>
	      </ion-list>
	    </div>
	  </ion-content>
	  
	  <!--footer： 是这个菜单页面的底部也可以省略 -->
	  <ion-footer>
	      <div class="menu-footer">
	          <ion-grid>
	            <ion-row>
	              <ion-col col-4 *ngFor="let f of footerBtn">
	               <button ion-button clear >
	                  <ion-icon name="{{f.icon}}" class="iconColor" ></ion-icon> 
	                  {{f.title}}
	               </button>
	              </ion-col>
	            </ion-row>
	          </ion-grid>
	        </div>
	  </ion-footer>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;
  butPages = [];
  footerBtn = [];
  

  pages: any[] = [
    {title:'我的订单',component: FirstRunPage,icon:'ios-mail-outline'},
	  {title:'实名认证',component: FirstRunPage,icon:'ios-contact-outline'},
	  {title:'绑定学生',component: FirstRunPage,icon:'ios-pin-outline'},
	  {title:'找孩管理',component: FirstRunPage,icon:'ios-cart-outline'},
	  {title:'教师认证',component: FirstRunPage,icon:'ios-mic-outline'},
	  {title:'上传课件',component: FirstRunPage,icon:'ios-clock-outline'},
	  {title:'我的钱包',component: FirstRunPage,icon:'ios-qr-scanner-outline'},
	  {title:'我的收藏',component: FirstRunPage,icon:'ios-alarm-outline'},
	  {title:'教育商城',component: FirstRunPage,icon:'ios-car-outline'},
	  {title:'客服',component: FirstRunPage,icon:'ios-shirt-outline'}
  ]

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      //平台已经准备好了，插件是可用的。
      //调用更高层次的本地事物
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
    this.initfooter();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

	initButPages(){
    this.butPages=[
//    {title:'my info',component: MyInfoPage},
//    {title:'my grade',component: MyGradePage},
//    {title:'my grade',component: MyGradePage}
    ]
  }

	initfooter(){
    this.footerBtn=[
      {title:'设置',icon:'ios-settings-outline'},
      {title:'学校中心',icon:'ios-power-outline'},
    ]
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
