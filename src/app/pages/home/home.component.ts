import { Component } from '@angular/core';
import {LayoutComponent} from '../../shared/layout/layout.component';
import {HomeHeroComponent} from '../../components/home-hero/home-hero.component';
import {OfferComponent} from '../../components/offer/offer.component';
import {HomeAboutusComponent} from '../../components/home-aboutus/home-aboutus.component';
import {CategoriesComponent} from '../../components/categories/categories.component';

@Component({
  selector: 'app-home',
  imports: [
    LayoutComponent,
    HomeHeroComponent,
    OfferComponent,
    HomeAboutusComponent,
    CategoriesComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
