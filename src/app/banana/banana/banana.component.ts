import { Component, OnInit } from '@angular/core';
import { BananaTestService } from '../banana-test.service';
import { Observable, from } from 'rxjs';
import { Banana } from 'src/app/core/core/models/banana';
import { Store, select } from '@ngrx/store';
import * as fromAppStore from '../../app-store/reducers';
import { Artikl } from 'src/app/core/core/models/artikl';
import {BananaActions} from '../../app-store/actions';
@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.scss']
})
export class BananaComponent implements OnInit {
  bananas$: Observable<(Banana & Artikl)[]>;
  loading$: Observable<boolean>;
  constructor(private store: Store<fromAppStore.State>) {
    // this.bananas$ = this.bananaService.getBananas();
    this.bananas$ = this.store.pipe(select(fromAppStore.selectBananaList));
    this.loading$ = this.store.pipe(select(fromAppStore.selectBananaListLoading));
   }

  ngOnInit() {
    this.store.dispatch(BananaActions.loadBananas());
  }

}
