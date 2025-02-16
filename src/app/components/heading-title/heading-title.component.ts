import {Component, input} from '@angular/core';

@Component({
  selector: 'app-heading-title',
  imports: [],
  templateUrl: './heading-title.component.html',
})
export class HeadingTitleComponent {
  title = input.required<string>();
  subTitle = input.required<string>();
  classTitle = input<string>();
  classSubTitle = input<string>();
}
