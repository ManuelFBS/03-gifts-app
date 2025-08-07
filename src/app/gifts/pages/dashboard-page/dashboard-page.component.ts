import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from '../../components/side-menu-header/side-menu-header.component';

@Component({
      selector: 'app-dashboard-page',
      imports: [RouterOutlet, SideMenuHeaderComponent],
      templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {}
