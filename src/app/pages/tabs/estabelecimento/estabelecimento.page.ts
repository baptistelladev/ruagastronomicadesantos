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


@Component({
  selector: 'rgs-estabelecimento',
  templateUrl: './estabelecimento.page.html',
  styleUrls: ['./estabelecimento.page.scss'],
})
export class EstabelecimentoPage implements OnInit {

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

  @ViewChild('establishmentContent') establishmentContent: IonContent;

  public todayAsDayNumber: any = moment().day()

  public selectedOption: string;

  public initialMenuOffset: any;

  public menu: any[] = [
    {
      text: {
        pt: 'Localização'
      },
      value: 'location'
    },
    {
      text: {
        pt: 'Caracteristicas'
      },
      value: 'character'
    },
    {
      text: {
        pt: 'Redes sociais'
      },
      value: 'networks'
    },
    {
      text: {
        pt: 'Reserva'
      },
      value: 'contact'
    }
  ]

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
    public store : Store
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
      await this.showAlert('Cole-o em um aplicativo de sua preferência');
    }
  }

  public async showAlert(message: string): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      subHeader: 'Endereço copiado',
      message: message,
      cssClass: 'rgs-alert',
      buttons: ['Entendi']
    })

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

}
