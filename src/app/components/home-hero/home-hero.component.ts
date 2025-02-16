import { Component } from '@angular/core';
import {HeadingTitleComponent} from '../heading-title/heading-title.component';
import {CustomButtonComponent} from '../custom-button/custom-button.component';

@Component({
  selector: 'app-home-hero',
  imports: [
    HeadingTitleComponent,
    CustomButtonComponent,
  ],
  templateUrl: './home-hero.component.html',
})
export class HomeHeroComponent {

}
