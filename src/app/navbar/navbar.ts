import { Component } from '@angular/core';
import { FlowbiteService } from '../../services/flowbiteService';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/themeService';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  constructor(private flowbiteService: FlowbiteService, private dark: ThemeService) { }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  toggleDarkMode() {
    this.dark.toggleDarkMode()
  }
}
