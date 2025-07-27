import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  setDarkMode(value: boolean): void {
    this.isDarkMode = value;
    document.body.classList[value ? 'add' : 'remove']('dark');
  }
}
