import { AfterContentInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AlertController, IonContent, NavController } from '@ionic/angular';
import { Clipboard } from '@angular/cdk/clipboard';
import * as moment from 'moment';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { ISocialNetwork } from 'src/app/shared/models/Network';
import { Store } from '@ngrx/store';
import { IShortEstablishment } from 'src/app/shared/models/Establishment';
import { map, Observable, Subscription } from 'rxjs';
import * as AppStore from './../../../shared/store/app.state';
import { ILang } from 'src/app/shared/models/Lang';
import { ITime } from 'src/app/shared/models/Time';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'rgs-estabelecimento',
  templateUrl: './estabelecimento.page.html',
  styleUrls: ['./estabelecimento.page.scss'],
})
export class EstabelecimentoPage implements OnInit {

  @ViewChild('establishmentContent') establishmentContent: IonContent;

  public todayAsDayNumber: any = moment().day()

  public selectedOption: string;

  public initialMenuOffset: any;

  public establishment: IShortEstablishment;
  public establishment$: Observable<IShortEstablishment>;
  public establishmentDescription: Subscription;

  public currentLanguage: ILang;
  public currentLanguage$: Observable<ILang>;
  public currentLanguageSubscription: Subscription;


  constructor(
    private navCtrl : NavController,
    private renderer : Renderer2,
    private clipboard: Clipboard,
    private alertCtrl : AlertController,
    public store : Store,
    private translate : TranslateService
  ) { }

  async ngOnInit() {
    this.getCurrentLanguageFromNGRX();
    this.selectOption('location');
    this.getCurrentEstablishment();

  }

  public getCurrentLanguageFromNGRX(): void {
    this.currentLanguage$ = this.store.select(AppStore.selectAppCurrentLanguage);

    this.currentLanguageSubscription = this.currentLanguage$
    .subscribe((language: ILang) => {
      this.currentLanguage = language;
    })
  }

  public getCurrentEstablishment(): void {
    this.establishment$ = this.store.select(AppStore.selectCurrentEstablishment);

    this.establishmentDescription = this.establishment$
    .pipe(map((establishment: IShortEstablishment) => {
      return {
        ...establishment,
        working_time: [...establishment.working_time].sort((a, b) => a.day_number - b.day_number)
      }
    }))
    .subscribe((establishment: IShortEstablishment) => {
      this.establishment = establishment;
    })
  }


  public back(): void {
    this.navCtrl.back()
  }

  public async selectOption(option: string) {
    this.selectedOption = option;
  }

  public async goWithWaze() {
    let hasCopy = this.clipboard.copy(`${this.establishment.adress.street}, ${this.establishment.adress.number} - ${this.establishment.adress.neighborhood}`);

    if (hasCopy) {
      await this.showAlert(`${this.translate.instant('SHARED.PRIVATE_APP')}`);
    }
  }

  public async showAlert(message: string): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      subHeader: `${this.translate.instant('SHARED.COPIED_ADRESS')}`,
      message: message,
      cssClass: 'rgs-alert',
      buttons: [
        {
          role: 'cancel',
          text: `${this.translate.instant('SHARED.UNDERSTOOD')}`
        },
      ]
    });

    alert.present();

    return alert
  }

  public hideToolbar(e: any): void {
    console.log(e.detail);

    let header: ElementRef | HTMLElement | null = document.getElementById('estabelecimento-header');

    if (e.detail.scrollTop > 60) {
      this.renderer.addClass(header, 'hide');
    } else {
      this.renderer.removeClass(header, 'hide');
    }
  }

  public async scrollToTop() {
    this.establishmentContent.scrollToTop(600);
  }

  public async redirectToWhatsapp(): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      cssClass: 'rgs-alert',
      subHeader: 'WhatsApp',
      message: `${this.translate.instant('SHARED.I_WILL_REDIRECT_YOU')} <b>${this.establishment.name}${this.currentLanguage.value === 'en' ? "'s WhatsApp," : ","}</b> ${this.translate.instant('SHARED.OK_QUESTION')}`,
      buttons: [
        {
          role: 'cancel',
          text: `${this.translate.instant('SHARED.CANCEL')}`,
          handler: () => {

          }
        },
        {
          role: 'confirm',
          text: `${this.translate.instant('SHARED.GO_TO_WHATS')}`,
          handler: async () => {
            await alert.dismiss().then(() => {
              this.goToWhatsApp();
            })
          }
        }
      ]
    })

    await alert.present();

    return alert;
  }

  /**
   * @description Abrir WhatsApp com mensagem.
   */
  public goToWhatsApp(): void {
    let mensagem: string = this.translate.instant('MESSAGES.WELCOME_WHATSAPP');
    let mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5513997330408?text=${mensagemCodificada}`, '_blank');
  }

  public goToInsta(): void {
    window.open(`https://www.instagram.com/ruagastronomicadesantos/`, '_blank');
  }

  public async redirectToInstagram(): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      cssClass: 'rgs-alert',
      mode: 'ios',
      subHeader: 'Instagram',
      message: `${this.translate.instant('SHARED.I_WILL_REDIRECT_YOU_INSTAGRAM')} <b>${this.establishment.name}${this.currentLanguage.value === 'en' ? "'s Instagram," : ","}</b> ${this.translate.instant('SHARED.OK_QUESTION')}`,
      buttons: [
        {
          text: `${this.translate.instant('SHARED.CANCEL')}`,
          role: '',
          handler: () => {

          }
        },
        {
          text: `${this.translate.instant('SHARED.GO_TO_INSTA')}`,
          role: 'confirm',
          handler: async () => {
            await alert.dismiss().then(() => {
              this.goToInsta();
            })
          }
        }
      ]
    })

    await alert.present();

    return alert;
  }

}
