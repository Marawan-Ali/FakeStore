import { Component } from '@angular/core';
import { CartService } from '../../services/cartService';
import { Product } from '../product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  cartItems: Product[] = [];

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.cartItems = this.cart.getCart();
  }

  remove(productId: number) {
    this.cart.removeFromCart(productId);
    this.cartItems = this.cart.getCart();
  }

  getTotal() {
    return this.cart.getTotal();
  }

  clear() {
    this.cart.clearCart();
    this.cartItems = [];
  }
}
