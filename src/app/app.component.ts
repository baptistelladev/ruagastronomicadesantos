import { Component, OnInit } from '@angular/core';
import { StorageService } from './core/services/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { Store, StoreModule } from '@ngrx/store';
import * as AppStore from './shared/store/app.state'
import { APP_LANG_KEY, IS_FIRST_ACCESS_KEY } from './shared/consts/keys';
import { ILang } from './shared/models/Lang';
import { LANGS } from './shared/mocks/langs';
import { NavController } from '@ionic/angular';

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
    private navCtrl : NavController
  ) {}

  async ngOnInit() {
    await this.storageService.createStorage();

    await this.storageService.getStorageKey(APP_LANG_KEY).then((res: string) => {
      if (res === null) {
        this.openModalLanguage = true;

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
  }

  public understood(): void {
    this.openModalLanguage = false;
    this.storageService.setStorageKey(APP_LANG_KEY, this.currentLanguage.value);
  }
}
