import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
      selector: 'gift-history',
      imports: [],
      templateUrl: './gift-history.component.html',
})
export default class GiftHistoryComponent {
      query = toSignal(
            inject(ActivatedRoute).params.pipe(map((params) => params['query']))
      );
}
