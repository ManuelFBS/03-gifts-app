import { Component, inject, signal } from '@angular/core';
import { GiftListComponent } from '../../components/gift-list/gift-list.component';
import { GiftService } from '../../services/gifts.service';
import { Gift } from '../../interfaces/gift.interface';

@Component({
      selector: 'app-search',
      imports: [GiftListComponent],
      templateUrl: './search-page.component.html',
})
export default class SearchComponent {
      giftService = inject(GiftService);
      gifts = signal<Gift[]>([]);

      onSearch(query: string) {
            this.giftService.searchGifts(query).subscribe((resp) => {
                  this.gifts.set(resp);
            });
      }
}
