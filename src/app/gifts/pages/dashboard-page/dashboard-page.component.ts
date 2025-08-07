import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiftsSideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
      selector: 'app-dashboard-page',
      imports: [RouterOutlet, GiftsSideMenuComponent],
      templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {}
