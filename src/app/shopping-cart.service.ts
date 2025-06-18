import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartItems: any[] = [];

  getItems() {
    return this.cartItems;
  }

  addItem(item: any) {
    const existing = this.cartItems.find((p) => p.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }

  clearCart() {
    this.cartItems = [];
  }
}
