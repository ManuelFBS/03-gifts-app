import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gift } from '../interfaces/gift.interface';
import { GiftMapper } from '../mapper/gift.mapper';
import { map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GiftService {
      private http = inject(HttpClient);

      trendingGifts = signal<Gift[]>([]);
      trendingGiftsLoading = signal(true);

      constructor() {
            this.loadTrendingGifts();
      }

      loadTrendingGifts() {
            this.http
                  .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
                        params: {
                              api_key: environment.giphyApiKey,
                              limit: 20,
                        },
                  })
                  .subscribe((resp) => {
                        const gifts = GiftMapper.mapGiphyItemsToGiftArray(
                              resp.data
                        );

                        this.trendingGifts.set(gifts);
                        this.trendingGiftsLoading.set(false);
                        console.log({ gifts });
                  });
      }

      searchGifts(query: string) {
            return this.http
                  .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
                        params: {
                              api_key: environment.giphyApiKey,
                              limit: 20,
                              q: query,
                        },
                  })
                  .pipe(
                        map(({ data }) => data),
                        map((items) =>
                              GiftMapper.mapGiphyItemsToGiftArray(items)
                        )
                  );
            // .subscribe((resp) => {
            //       const gifts = GiftMapper.mapGiphyItemsToGiftArray(
            //             resp.data
            //       );

            //       console.log({ search: gifts });
            // });
      }
}
