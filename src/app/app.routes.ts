import { Routes } from '@angular/router';
import { Products } from './products/products';
import { ProductDetails } from './product-details/product-details';
import { Categories } from './categories/categories';
import { Cart } from './cart/cart';
import { Login } from './login/login';

export const routes: Routes = [{ path: "", redirectTo: "products", pathMatch: 'full' },
{ path: "products", component: Products, title: "Home" },
{ path: "products/:id", component: ProductDetails, title: "Details" },
{ path: "categories", component: Categories, title: "Categories" },
{ path: "cart", component: Cart, title: "Cart" },
{ path: "login", component: Login, title: "Login" },
{ path: "**", redirectTo: "products", pathMatch: 'full' }];
