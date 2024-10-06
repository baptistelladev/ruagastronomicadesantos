import { Component, Input, OnInit } from '@angular/core';
import { ISocialNetwork } from '../../models/Network';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'rgs-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss'],
})
export class SocialNetworksComponent  implements OnInit {

  @Input() socialNetworks: ISocialNetwork[];
  @Input() centered: boolean;

  constructor() { }

  ngOnInit() {}

}
