import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, viewChild, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AlertController, AlertInput, IonContent, IonSelect, NavController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable, Subscription, take } from 'rxjs';
import { IShortEstablishment } from 'src/app/shared/models/Establishment';
import { ILang } from 'src/app/shared/models/Lang';
import { ISocialNetwork } from 'src/app/shared/models/Network';
import * as AppStore from './../../../shared/store/app.state';
import { Store } from '@ngrx/store';
import { ITranslation } from 'src/app/shared/models/Translation';
import { EstablishmentsService } from 'src/app/core/services/firebase/establishments.service';
import { CollectionsEnum } from 'src/app/shared/enums/Collection';
import * as moment from 'moment';
import { UtilsService } from 'src/app/core/services/utils.service';
import SwiperComponent, { Swiper } from 'swiper';

@Component({
  selector: 'rgs-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('establishmentsSwiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  public adress: any = {
    pt: 'Rua Tolentino Filgueiras, Gonzaga.',
    en: 'Tolentino Filgueiras Street, Gonzaga.',
    es: 'Calle Tolentino Filgueiras, Gonzaga.'
  }

  @ViewChild('filterSelector') filterSelector: IonSelect;
  @ViewChild('homeContent') homeContent: IonContent;

  public selectedOrderOption: string;

  public orderOptions: any[] = [
    {
      value: 'INC',
      text: {
        pt: 'Menor para o maior',
        en: 'From smallest to largest',
        es: 'De menor a mayor'
      }
    },
    {
      value: 'DEC',
      text: {
        pt: 'Maior para o menor',
        en: 'From largest to smallest',
        es: 'De mayor a menor'
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

  public translatedPage: any;
  public translatedPage$: Observable<any>;

  constructor(
    private alertCtrl : AlertController,
    private title : Title,
    private navCtrl : NavController,
    private translate : TranslateService,
    private store : Store,
    private establishmentsService : EstablishmentsService,
    private utilsService : UtilsService,
    private popoverCtrl : PopoverController
  ) { }

  ngOnInit() {
    this.initialOrdenation('INC');
    this.getCurrentLanguageFromNGRX();
    this.getEstablishments();
  }

  ngAfterViewInit(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  ionViewDidEnter(): void {
    this.getTitleFromPage();
  }

  public async orderBy(orderBy: string) {
    this.selectedOrderOption = orderBy;

    if (this.selectedOrderOption === 'INC') {
      this.short_establishments = await this.utilsService.orderByAdressNumberCrescent(this.short_establishments);
    } else {
      this.short_establishments = await this.utilsService.orderByAdressNumberDecrescent(this.short_establishments);
    }

    await this.popoverCtrl.dismiss({}, '', 'order-by').then(() => {
      this.slideSwiperToStart();
    })

  }

  public initialOrdenation(value: string) {
    this.selectedOrderOption = value;
  }

  public getTitleFromPage(): void {
    this.translatedPage$ = this.translate.get('INICIO_PAGE')

    this.translatedPage$
    .pipe(take(2))
    .subscribe((resp: any) => {
      this.translatedPage = resp;
      this.title.setTitle(this.translatedPage['PAGE_TITLE'])
    })
  }

  public getEstablishments() {
    this.establishments$ = this.establishmentsService.getCollection(CollectionsEnum.SHORT_ESTABLISHMENTS);

    this.establishmentsDescription = this.establishments$
    .pipe(
      map((establishments: IShortEstablishment[]) => {
        this.utilsService.orderByAdressNumberCrescent(establishments);
        return establishments
      })
    )
    .subscribe((establishments: IShortEstablishment[]) => {
      this.short_establishments = establishments;
      console.log(this.short_establishments);
    })
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

  public slideSwiperToStart(): void {
    this.swiper?.slideTo(0, 800);
  }

  public ngOnDestroy(): void {
    this.currentLanguageSubscription.unsubscribe();
    this.establishmentsDescription.unsubscribe();
  }
}
