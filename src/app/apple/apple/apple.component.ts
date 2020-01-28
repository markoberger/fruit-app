import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apple } from 'src/app/core/core/models/apple';
import { AppleTestService } from '../apple-test.service';
import { Artikl } from 'src/app/core/core/models/artikl';
import { Store, select } from '@ngrx/store';
import * as fromAppStore from '../../app-store/reducers';
import { AppleActions } from 'src/app/app-store/actions';
@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {

  apples$: Observable<(Apple & Artikl)[]>; 
  loading$: Observable<boolean>;
  constructor(private store: Store<fromAppStore.State>) {
    this.apples$ = this.store.pipe(select(fromAppStore.selectAppleList));
    this.loading$ = this.store.pipe(select(fromAppStore.selectAppleListLoading));
   }

  ngOnInit() {
    this.store.dispatch(AppleActions.loadApples());  
  }
}
