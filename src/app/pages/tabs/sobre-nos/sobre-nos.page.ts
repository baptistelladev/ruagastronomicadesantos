import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ILang } from 'src/app/shared/models/Lang';
import { ISocialNetwork } from 'src/app/shared/models/Network';
import * as AppStore from './../../../shared/store/app.state';


@Component({
  selector: 'rgs-sobre-nos',
  templateUrl: './sobre-nos.page.html',
  styleUrls: ['./sobre-nos.page.scss'],
})
export class SobreNosPage implements OnInit, OnDestroy {

  public currentLanguage: ILang;
  public currentLanguage$: Observable<ILang>;
  public currentLanguageSubscription: Subscription;

  @ViewChild('sobreContent') sobreContent: IonContent;

  public socialNetworks: ISocialNetwork[] = [
    {
      text: 'Instagram',
      value: 'instagram',
      name: 'Instagram',
      baseUrl: 'https://www.instagram.com/',
      user: 'anfitrionapp',
      logo: 'logo-instagram'
    },
    {
      text: 'Contato',
      value: 'whatsapp',
      name: 'Contato',
      baseUrl: '/contato',
      user: '',
      logo: 'logo-whatsapp'
    },
  ]

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

  public async scrollToTop() {
    this.sobreContent.scrollToTop(600);
  }

  public ngOnDestroy(): void {
    this.currentLanguageSubscription.unsubscribe();
  }

}
