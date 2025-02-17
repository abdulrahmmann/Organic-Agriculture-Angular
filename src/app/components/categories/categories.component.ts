import { Component } from '@angular/core';
import {HeadingTitleComponent} from '../heading-title/heading-title.component';
import {ProductInterface} from '../../models/product.model';
import {products} from '../../data/products';
import {ProductItemComponent} from '../product-item/product-item.component';

@Component({
  selector: 'app-products',
  imports: [
    HeadingTitleComponent,
    ProductItemComponent
  ],
  templateUrl: './categories.component.html',
  styles: ``
})
export class CategoriesComponent {
  products: ProductInterface[] = products;
}
