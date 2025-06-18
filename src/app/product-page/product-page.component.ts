import { Component, inject } from '@angular/core';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  imports: [ProductCardListComponent, CommonModule, FormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  private router = inject(Router);
  private cartService = inject(ShoppingCartService);
  searchTerm: string = '';

  products: Product[] = [
    new Product({
      name: 'A 產品',
      authors: ['作者 A', '作者 B', '作者 C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      name: 'B 產品',
      authors: ['作者 A', '作者 B', '作者 C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      name: 'C 產品',
      authors: ['作者 A', '作者 B', '作者 C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      name: 'D 產品',
      authors: ['作者 A', '作者 B', '作者 C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      name: 'E 產品',
      authors: ['作者 A', '作者 B', '作者 C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
  ];

  onView(product: Product): void {
    this.router.navigate(['product', product.name]);
  }

  addToCart(product: any) {
    this.cartService.addItem(product);
    this.router.navigate(['/cart']);
  }

  search() {
    console.log('使用者點了查詢，關鍵字:', this.searchTerm);
  }
}
