import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
      faChartLine,
      faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

interface MenuOption {
      label: string;
      subLabel: string;
      route: string;
      icon: any;
}

@Component({
      selector: 'gifts-side-menu-options',
      imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
      templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {
      menuOptions: MenuOption[] = [
            {
                  icon: faChartLine,
                  label: 'Trending',
                  subLabel: 'Gifts Populares',
                  route: '/dashboard/trending',
            },
            {
                  icon: faMagnifyingGlass,
                  label: 'Buscador',
                  subLabel: 'Buscar Gifts',
                  route: '/dashboard/search',
            },
      ];
}
