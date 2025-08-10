import { Gift } from '../interfaces/gift.interface';
import { GiphyItem } from '../interfaces/giphy.interfaces';

export class GiftMapper {
      static mapGiphyItemToGift(item: GiphyItem): Gift {
            return {
                  id: item.id,
                  title: item.title,
                  url: item.images.original.url,
            };
      }

      static mapGiphyItemsToGiftArray(items: GiphyItem[]): Gift[] {
            return items.map(this.mapGiphyItemToGift);
      }
}
