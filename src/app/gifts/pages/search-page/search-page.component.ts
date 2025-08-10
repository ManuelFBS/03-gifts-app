import { Component } from '@angular/core';
import { GiftListComponent } from '../../components/gift-list/gift-list.component';

@Component({
      selector: 'app-search',
      imports: [GiftListComponent],
      templateUrl: './search-page.component.html',
})
export default class SearchComponent {}
