import { Component } from '@angular/core';
import {HeadingTitleComponent} from '../heading-title/heading-title.component';
import {CustomButtonComponent} from '../custom-button/custom-button.component';

@Component({
  selector: 'app-home-aboutus',
  imports: [
    HeadingTitleComponent,
    CustomButtonComponent
  ],
  templateUrl: './home-aboutus.component.html',
})
export class HomeAboutusComponent {

}
