import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {MobileHeaderComponent} from '../mobile-header/mobile-header.component';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent,
    FooterComponent,
    MobileHeaderComponent
  ],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

}
