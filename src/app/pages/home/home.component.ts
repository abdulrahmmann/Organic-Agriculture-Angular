import { Component } from '@angular/core';
import {LayoutComponent} from '../../shared/layout/layout.component';
import {HomeHeroComponent} from '../../components/home-hero/home-hero.component';
import {OfferComponent} from '../../components/offer/offer.component';

@Component({
  selector: 'app-home',
  imports: [
    LayoutComponent,
    HomeHeroComponent,
    OfferComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
