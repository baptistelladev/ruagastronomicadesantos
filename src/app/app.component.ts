import { AppInfoService } from './core/services/firebase/app-info.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StorageService } from './core/services/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { Store, StoreModule } from '@ngrx/store';
import * as AppStore from './shared/store/app.state'
import { APP_LANG_KEY, IS_FIRST_ACCESS_KEY } from './shared/consts/keys';
import { ILang } from './shared/models/Lang';
import { LANGS } from './shared/mocks/langs';
import { NavController } from '@ionic/angular';
import { AppInfo } from '@capacitor/app';
import { IAppInfo } from './shared/models/AppInfo';
import { Analytics } from '@angular/fire/analytics';
import { AnalyticsService } from './core/services/firebase/analytics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rgs-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public openModalLanguage: boolean = false;
  public langs: ILang[] = LANGS;
  public currentLanguage: ILang;

  constructor(
    private storageService : StorageService,
    private translate : TranslateService,
    private store : Store,
    private appInfoService : AppInfoService
  ) {}

  async ngOnInit() {
    this.getAppInfo();

    await this.storageService.createStorage();

    await this.storageService.getStorageKey(APP_LANG_KEY).then((res: string) => {
      if (res === null) {

        let foundLang = LANGS.find((lang: ILang) => {
          return lang.value === 'pt';
        })

        if (foundLang) {
          this.currentLanguage = foundLang;
        }

        this.translate.use(this.currentLanguage.value);
        this.store.dispatch(AppStore.setCurrentLanguage({ language: this.currentLanguage }));
      } else {
        let foundLang = LANGS.find((lang: ILang) => {
          return lang.value === res;
        })

        if (foundLang) {
          this.currentLanguage = foundLang;
        }

        this.translate.use(this.currentLanguage.value);
        this.store.dispatch(AppStore.setCurrentLanguage({ language: this.currentLanguage }));
      }
    })


    console.info(
      `\n%c⚠️ Xô rapaliga ⚠️%c \n${'vai trabalhar,vai...'} \n\n%cFica inspecionando código alheio.\nJá que você é curioso, pelo menos segue no insta https://www.instagram.com/ruagastronomicadesantos/`,
      "color:#ceb73f; background: #ceb73f33; font-size:1.5rem; padding: 20px 20px 16px 20px; margin: 1rem auto; font-family: Rockwell, Tahoma, 'Trebuchet MS', Helvetica; border: 2px solid #ceb73f; border-radius: 4px; font-weight: bold; text-shadow: 1px 1px 1px #000000bf;",
      'font-weight: bold; font-size: 1rem;color: #ceb73f;',
      "color: #ceb73f; font-size: 0.75rem; font-family: Tahoma, 'Trebuchet MS', Helvetica;",
    );
  }

  public understood(): void {
    this.openModalLanguage = false;
    this.storageService.setStorageKey(APP_LANG_KEY, this.currentLanguage.value);
  }

  public async getAppInfo() {
    await this.appInfoService.getDocument('RGS_APP_INFO', 'Ni3MH95foTBjb8H5MKnz')
    .then((appInfo: IAppInfo | undefined) => {
      if (appInfo) {
        // TIVE QUE FAZER ISSO PARA O TSLINT ACEITAR VÁRIOS DISPATCH
        if (appInfo.networks) { this.store.dispatch(AppStore.setAppInfoNetworks({ networks: appInfo.networks })); }
        if (appInfo.contact) { this.store.dispatch(AppStore.setAppInfoContact({ contact: appInfo.contact })); }
      }
    })
  }
}
