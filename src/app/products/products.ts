import { Component } from '@angular/core';
import { ProductService } from '../../services/productService';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilterPipe } from '../../pipes/filter-pipe';
import { Product } from '../product';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cartService';

@Component({
  selector: 'app-products',
  imports: [RouterLink, CurrencyPipe, FilterPipe, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  constructor(
    private product: ProductService,
    private activatedRoute: ActivatedRoute,
    private cart: CartService,
    private toastr: ToastrService,) { }

  searchValue: string = '';
  productList: Product[] = []
  filteredProducts: Product[] = []
  sortOption: string = ''
  hasError: boolean = false

  ngOnInit(): void {
    this.getAllProducts();
  }



  getAllProducts() {
    this.hasError = false

    this.product.getProducts().subscribe({
      next: (res) => {
        this.productList = res;

        this.activatedRoute.queryParams.subscribe(params => {
          const category = params['category']?.toLowerCase()
          const categoryFiltered = category
            ? this.productList.filter(product => product.category.toLowerCase() === category)
            : [...this.productList];

          this.filteredProducts = this.searchValue
            ? categoryFiltered.filter(product =>
              product.title.toLowerCase().includes(this.searchValue.toLowerCase())
            )
            : categoryFiltered;

          this.sortProducts()
        })
      },
      error: (err) => {
        this.hasError = true
      }
    })
  }

  sortProducts() {
    switch (this.sortOption) {
      case 'nameAsc':
        this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title))
        break;
      case 'nameDesc':
        this.filteredProducts.sort((a, b) => b.title.localeCompare(a.title))
        break;
      case 'priceAsc':
        this.filteredProducts.sort((a, b) => a.price - b.price)
        break;
      case 'priceDesc':
        this.filteredProducts.sort((a, b) => b.price - a.price)
        break;
      default:
        this.filteredProducts.sort((a, b) => a.id - b.id)
        break;
    }
  }

  addToCart(product: Product) {
    this.cart.addToCart(product);
    this.toastr.success(`${product.title} added to cart`, 'Success');
  }
}
