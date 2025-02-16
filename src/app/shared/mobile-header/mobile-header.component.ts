import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {navLinks} from '../../data/navLinks';

@Component({
  selector: 'app-mobile-header',
  imports: [DrawerModule, ButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './mobile-header.component.html',
})
export class MobileHeaderComponent {
  visible: boolean = false;
  protected readonly navLinks = navLinks;
}
