import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../services/productService';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cartService';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails {
  constructor(private product: ProductService, activatedRoute: ActivatedRoute,
    private cart: CartService,
    private toastr: ToastrService,
  ) {
    activatedRoute.params.subscribe((res) => {
      this.id = res['id'];
    })
  }
  id: any;
  productDetails!: Product;

  ngOnInit() {
    this.getSpecificProduct()
  }

  getSpecificProduct() {
    this.product.getSpecificProduct(this.id).subscribe({
      next: (res) => {
        console.log(res)
        this.productDetails = res;
      }
    }
    )
  }

  addToCart(product: Product) {
    this.cart.addToCart(product);
    this.toastr.success(`${product.title} added to cart`, 'Success');
  }
}
