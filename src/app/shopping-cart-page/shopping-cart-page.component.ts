import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
})
export class ShoppingCartPageComponent {
  cartItems: any[] = [];

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  get total(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  removeProduct(id: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
  }

  submitOrder(): void {
    console.log('訂單已送出', this.cartItems);
    this.cartItems = [];
  }
}
