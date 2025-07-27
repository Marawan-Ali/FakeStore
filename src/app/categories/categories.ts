import { Component } from '@angular/core';
import { Category } from '../product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {
  Categories: Category[] = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing"
  ];

  getCategoryIcon(category: string): string {
    switch (category) {
      case 'electronics':
        return 'fas fa-plug';
      case 'jewelery':
        return 'fas fa-gem';
      case "men's clothing":
        return 'fas fa-mars';
      case "women's clothing":
        return 'fas fa-venus';
      default:
        return 'fas fa-box';
    }
  }
}
