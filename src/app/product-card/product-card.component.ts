import { CurrencyPipe, DatePipe } from '@angular/common';
import { booleanAttribute, Component, HostBinding, input, model, numberAttribute, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly productName = input<string>();

  readonly authors = input<string[]>();

  readonly company = input<string>();

  readonly isShow = input.required<boolean, string | boolean>({ transform: booleanAttribute });

  readonly photoUrl = input<string>();

  readonly price = input<number, string | number>(0, { transform: numberAttribute });

  readonly view = output<void>();

  add() {
    alert('已加入購物車');
  }

  @HostBinding('class')
  class = 'app-product-card';
}
