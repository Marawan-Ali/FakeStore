import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../app/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], searchValue: string, type: 'title' | 'category' = 'title'): Product[] {
    if (!searchValue) return products;

    const value = searchValue.toUpperCase();

    if (type === 'category') {
      return products.filter(product => product.category.toUpperCase().includes(value));
    }

    return products.filter(product => product.title.toUpperCase().includes(value));
  }

}
