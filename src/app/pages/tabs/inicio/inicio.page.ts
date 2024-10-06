import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AlertController, AlertInput, IonContent, IonSelect, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { SHORT_ESTABLISHMENTS } from 'src/app/shared/mocks/establishments';
import { IShortEstablishment } from 'src/app/shared/models/Establishment';
import { ILang } from 'src/app/shared/models/Lang';
import { ISocialNetwork } from 'src/app/shared/models/Network';
import * as AppStore from './../../../shared/store/app.state';
import { Store } from '@ngrx/store';
import { ITranslation } from 'src/app/shared/models/Translation';


@Component({
  selector: 'rgs-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, OnDestroy {

  public adress: any = {
    pt: 'Rua Tolentino Filgueiras, Gonzaga.',
    en: 'Tolentino Filgueiras Street, Gonzaga.',
    es: 'Calle Tolentino Filgueiras, Gonzaga.'
  }

  @ViewChild('filterSelector') filterSelector: IonSelect;
  @ViewChild('homeContent') homeContent: IonContent;

  public selectedOrderOption: string = 'numeric';

  public orderOptions: any[] = [
    {
      value: 'numeric',
      text: {
        pt: 'Ordem numérica',
        en: '',
        es: ''
      }
    },
    {
      value: 'alphabetic',
      text: {
        pt: 'Ordem alfabética',
        en: '',
        es: ''
      }
    }
  ]

  public selectedView: string = 'as-slide';
  public viewSegments: any[] = [
    {
      value: 'as-slide',
      text: {
        pt: 'slide',
        en: '',
        es: ''
      },
      icon: 'albums'
    },
    {
      value: 'as-list',
      text: {
        pt: 'lista',
        en: '',
        es: ''
      },
      icon: 'list'
    }
  ]

  public orderButtons: any[] = [
    {
      value: 'as-asc-desc',
      text: {
        pt: 'Visualizar em forma de slide',
        en: '',
        es: ''
      },
      icon: 'swap-vertical'
    }
  ]

  public filterButtons: any[] = [
    {
      value: 'as-asc-desc',
      text: {
        pt: 'Visualizar modo ',
        en: '',
        es: ''
      },
      icon: 'options'
    }
  ]

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

  public short_establishments: IShortEstablishment[] = SHORT_ESTABLISHMENTS;

  public filters: any[] = [
    {
      value: 'Tudo',
      text: {
        pt: 'Todas as opções',
        en: 'Everything',
        es: 'Tudito'
      }
    },
    {
      value: 'pet-friendly',
      text: {
        pt: 'Pet friendly',
        en: 'Pet friendly',
        es: 'Pet friendy'
      }
    }
  ]

  public currentLanguage: ILang;
  public currentLanguage$: Observable<ILang>;
  public currentLanguageSubscription: Subscription;

  constructor(
    private alertCtrl : AlertController,
    private title : Title,
    private navCtrl : NavController,
    private translate : TranslateService,
    private store : Store
  ) { }

  ngOnInit() {
    this.getCurrentLanguageFromNGRX();
  }

  ionViewWillEnter(): void {
    this.title.setTitle('Lista de estabelecimentos da Rua Gastronômica de Santos')
  }

  public getCurrentLanguageFromNGRX(): void {
    this.currentLanguage$ = this.store.select(AppStore.selectAppCurrentLanguage);

    this.currentLanguageSubscription = this.currentLanguage$
    .subscribe((language: ILang) => {
      this.currentLanguage = language;
    })
  }

  public async chooseViewMode(value: string) {
    this.selectedView = value;
  }

  public async showAlertViewMode(): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      cssClass: 'rgs-alert'
    })

    return alert
  }

  public async segmentViewChanged(value: string) {
    const alert = await this.showAlertViewMode();

    if (value === 'as-slide') {
      alert.subHeader = 'Modo slide';
      alert.message = 'Você quer ver os estabelecimentos em forma de <b>slide</b>?';
      alert.buttons = [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          role: 'confirm'
        },
      ]
    } else {
      alert.subHeader = 'Modo lista';
      alert.message = 'Você quer ver os estabelecimentos em forma de <b>lista</b>?';
      alert.buttons = [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          role: 'confirm'
        },
      ]
    }

    await alert.present();
  }

  public openFilterSelect(): void {
    this.filterSelector.open();
  }

  public helpUs(): void {
    this.navCtrl.navigateForward(['/ajude-nosso-projeto']);
  }

  public async scrollToTop() {
    this.homeContent.scrollToTop(600);
  }

  public seeEstablishment(establishment: any): void {
    this.navCtrl.navigateForward(['/estabelecimento/teste'])
  }

  public ngOnDestroy(): void {
    this.currentLanguageSubscription.unsubscribe();
  }
}
