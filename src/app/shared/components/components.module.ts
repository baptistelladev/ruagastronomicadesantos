import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { MadeWLoveComponent } from './made-w-love/made-w-love.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { LanguageButtonComponent } from './language-button/language-button.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AdsenseComponent } from './adsense/adsense.component';

@NgModule({
  declarations: [
    LogoComponent,
    MadeWLoveComponent,
    SocialNetworksComponent,
    CopyrightComponent,
    LanguageButtonComponent,
    AdsenseComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    LogoComponent,
    MadeWLoveComponent,
    SocialNetworksComponent,
    CopyrightComponent,
    LanguageButtonComponent,
    AdsenseComponent
  ]
})
export class ComponentsModule { }
