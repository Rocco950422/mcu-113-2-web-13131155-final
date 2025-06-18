import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
export class ProductDetailComponent {
  product: any;
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/products']);
  }

  addToCart() {
    alert('已加入購物車');
  }
}
