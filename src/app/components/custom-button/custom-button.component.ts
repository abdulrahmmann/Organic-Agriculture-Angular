import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-shine-button',
  imports: [
    NgClass
  ],
  templateUrl: './custom-button.component.html',
  styles: ``
})
export class CustomButtonComponent {
  title = input.required<string>();
  className = input<string>();
}
