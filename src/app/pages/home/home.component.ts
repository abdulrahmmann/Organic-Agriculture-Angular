import { Component } from '@angular/core';
import {LayoutComponent} from '../../shared/layout/layout.component';
import {HomeHeroComponent} from '../../components/home-hero/home-hero.component';

@Component({
  selector: 'app-home',
  imports: [
    LayoutComponent,
    HomeHeroComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
