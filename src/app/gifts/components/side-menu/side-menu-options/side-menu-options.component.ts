import { Component } from '@angular/core';

interface MenuOption {
      label: string;
      subLabel: string;
      route: string;
      icon: string;
}

@Component({
      selector: 'gifts-side-menu-options',
      imports: [],
      templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {
      menuOptions: MenuOption[] = [
            {
                  icon: 'fs-solid fa-chart-line',
                  label: 'Tending',
                  subLabel: 'Gifts Populares',
                  route: '/dashboard/trending',
            },
            {
                  icon: 'fs-solid fa-magnifying-glass',
                  label: 'Buscador',
                  subLabel: 'Buscar Gifts',
                  route: '/dashboard/search',
            },
      ];
}
