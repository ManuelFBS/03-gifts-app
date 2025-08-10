import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';

@Injectable({ providedIn: 'root' })
export class GiftService {
      private http = inject(HttpClient);

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
                        console.log({ resp });
                  });
      }
}
