import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AlertController, AlertInput, IonContent, IonSelect, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { IShortEstablishment } from 'src/app/shared/models/Establishment';
import { ILang } from 'src/app/shared/models/Lang';
import { ISocialNetwork } from 'src/app/shared/models/Network';
import * as AppStore from './../../../shared/store/app.state';
import { Store } from '@ngrx/store';
import { ITranslation } from 'src/app/shared/models/Translation';
import { EstablishmentsService } from 'src/app/core/services/firebase/establishments.service';
import { CollectionsEnum } from 'src/app/shared/enums/collection';

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

  public short_establishments: IShortEstablishment[];

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

  public establishments: IShortEstablishment;
  public establishments$: Observable<IShortEstablishment[]>;
  public establishmentsDescription: Subscription;

  constructor(
    private alertCtrl : AlertController,
    private title : Title,
    private navCtrl : NavController,
    private translate : TranslateService,
    private store : Store,
    private establishmentsService : EstablishmentsService
  ) { }

  ngOnInit() {
    this.getCurrentLanguageFromNGRX();
    this.getEstablishments();
  }

  public getEstablishments() {
    this.establishments$ = this.establishmentsService.getCollection(CollectionsEnum.SHORT_ESTABLISHMENTS);

    this.establishmentsDescription = this.establishments$
    .subscribe((stablishments: IShortEstablishment[]) => {
      console.log(stablishments);
      this.short_establishments = stablishments;
    })
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
      alert.subHeader = `${this.translate.instant('COMPONENTS.SEGMENT_VIEW.AS_SLIDE_TITLE')}`;
      alert.message = `${this.translate.instant('COMPONENTS.SEGMENT_VIEW.AS_SLIDE.0')} <b>${this.translate.instant('COMPONENTS.SEGMENT_VIEW.AS_SLIDE.1')}</b>`;
      alert.buttons = [
        {
          text: `${this.translate.instant('SHARED.CANCEL')}`,
          role: 'cancel'
        },
        {
          text: `${this.translate.instant('SHARED.DEFINE')}`,
          role: 'confirm'
        },
      ]
    } else {
      alert.subHeader = `${this.translate.instant('COMPONENTS.SEGMENT_VIEW.AS_LIST_TITLE')}`;
      alert.message = `${this.translate.instant('COMPONENTS.SEGMENT_VIEW.AS_LIST.0')} <b>${this.translate.instant('COMPONENTS.SEGMENT_VIEW.AS_LIST.1')}</b>`;
      alert.buttons = [
        {
          text: `${this.translate.instant('SHARED.CANCEL')}`,
          role: 'cancel'
        },
        {
          text: `${this.translate.instant('SHARED.DEFINE')}`,
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
    this.navCtrl.navigateForward(['/estabelecimento/' + establishment.value]);
    this.store.dispatch(AppStore.setCurrentEstablishment({ establishment: establishment } ))
  }

  public ngOnDestroy(): void {
    this.currentLanguageSubscription.unsubscribe();
    this.establishmentsDescription.unsubscribe();
  }
}
