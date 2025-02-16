import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {navLinks} from '../../data/navLinks';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  navLinks = navLinks;
}
