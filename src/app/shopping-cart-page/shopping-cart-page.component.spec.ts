import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
})
export class ShoppingCartPageComponent {
  cartItems: Product[] = [];

  get total(): number {
    return this.cartItems.reduce((sum, p) => sum + p.price * p.quantity, 0);
  }

  removeProduct(id: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
  }

  submitOrder(): void {
    console.log('訂單已送出', this.cartItems);
    this.cartItems = [];
  }
}
