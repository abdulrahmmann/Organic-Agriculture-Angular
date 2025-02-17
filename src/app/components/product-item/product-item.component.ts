import {Component, input} from '@angular/core';
import {Rating} from 'primeng/rating';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [
    Rating,
    CurrencyPipe,
  ],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  name = input.required<string>();
  type = input.required<string>();
  image = input.required<string>();
  price = input.required<number>();
  offer = input.required<number>();
  rating = input.required<number>();
}
