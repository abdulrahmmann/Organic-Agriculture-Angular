import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-custom-button',
  imports: [
    NgClass
  ],
  templateUrl: './custom-button.component.html',
  styles: ``
})
export class CustomButtonComponent {
  title = input.required<string>();
  className = input.required<string>();
}
