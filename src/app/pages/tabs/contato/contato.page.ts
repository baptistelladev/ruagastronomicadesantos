import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ILang } from 'src/app/shared/models/Lang';
import * as AppStore from './../../../shared/store/app.state';


@Component({
  selector: 'rgs-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit, OnDestroy {

  public currentLanguage: ILang;
  public currentLanguage$: Observable<ILang>;
  public currentLanguageSubscription: Subscription;

  public selectedSegment: string;

  public segments: any[] = [
    {
      value: 'comercial'
    },
    {
      value: 'others'
    }
  ]

  constructor(
    private navCtrl : NavController,
    private alertCtrl : AlertController,
    private store : Store
  ) { }

  ngOnInit() {
    this.setInitialSegment('comercial');
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

  public segmentChanged(ev: any, selectedSegment: any): void {
    console.log(ev, selectedSegment);
  }

  public setInitialSegment(valorDoSegmento: string): void {
    this.selectedSegment = valorDoSegmento;
  }

  public async showActionAlert(tipo: 'whatsapp' | 'email'): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      cssClass: 'rgs-alert',
      mode: 'ios',
      subHeader: `${tipo === 'whatsapp' ? 'WhatsApp' : 'E-mail'}`,
      message: `
        ${
          tipo === 'whatsapp' ?
          'Iremos te direcionar para o WhatsApp, tudo bem?' :
          'Abriremos seu app padrão de e-mail, tudo bem?'
        }
      `,
      buttons: [
        {
          role: 'cancel',
          text: 'Cancelar'
        },
        {
          role: 'confirm',
          text:  'Tudo bem',
          handler: () => {
            if (tipo === 'whatsapp') {
              this.openWhatsApp();
            } else {
              this.openEmailApp();
            }
          }
        }
      ]
    })

    await alert.present()
    return alert
  }

  /**
   * @description Abrir WhatsApp com mensagem.
   */
  public openWhatsApp(): void {
    let mensagem: string = 'Olá eu vim do Rua Gastronômica de Santos e...'
    let mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5513997330408?text=${mensagemCodificada}`, '_blank');
  }

  /**
   * @description Abrir o app padrão de e-mail do usuário.
   */
  public openEmailApp(): void {
    window.location.href = "mailto:anfitrionappoficial@gmail.com";
  }

  public ngOnDestroy(): void {
    this.currentLanguageSubscription.unsubscribe();
  }

}
