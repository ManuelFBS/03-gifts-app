import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GiftService {
      private http = inject(HttpClient);

      loadTrendingGifts() {
            //this.http.get()
      }
}
