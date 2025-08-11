import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gift } from '../interfaces/gift.interface';
import { GiftMapper } from '../mapper/gift.mapper';

@Injectable({ providedIn: 'root' })
export class GiftService {
      private http = inject(HttpClient);

      trendingGifts = signal<Gift[]>([]);
      trendingGiftsLoading = signal(true);

      searchHistory = signal<Record<string, Gift[]>>({});
      searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

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
                        ),

                        //* Historial...
                        tap((items) => {
                              this.searchHistory.update((history) => ({
                                    ...history,
                                    [query.toLowerCase()]: items,
                              }));
                        })
                  );
      }
}
