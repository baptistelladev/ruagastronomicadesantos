import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ILang } from 'src/app/shared/models/Lang';
import * as AppStore from './../../../shared/store/app.state';


@Component({
  selector: 'rgs-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, OnDestroy {

  public menuOptions: any[] = [
    {
      text: {
        pt: 'Contato',
        en: 'Contact',
        es: 'Contacto'
      },
      icon: 'call',
      route: 'contato'
    },
    {
      text: {
        pt: 'Sobre',
        en: 'About',
        es: 'Sobre'
      },
      icon: 'terminal',
      route: 'sobre-nos'
    }
  ]

  public currentLanguage: ILang;
  public currentLanguage$: Observable<ILang>;
  public currentLanguageSubscription: Subscription;

  constructor(
    private navCtrl : NavController,
    private store : Store
  ) { }

  ngOnInit() {
    this.getCurrentLanguageFromNGRX();
  }

  public getCurrentLanguageFromNGRX(): void {
    this.currentLanguage$ = this.store.select(AppStore.selectAppCurrentLanguage);

    this.currentLanguageSubscription = this.currentLanguage$
    .subscribe((language: ILang) => {
      this.currentLanguage = language;
    })
  }

  public back(): void {
    this.navCtrl.back()
  }

  public goToPage(page: string): void {
    this.navCtrl.navigateForward([page])
  }

  public ngOnDestroy(): void {
    this.currentLanguageSubscription.unsubscribe();
  }

}
