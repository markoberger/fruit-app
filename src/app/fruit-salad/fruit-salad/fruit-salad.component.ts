import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import * as fromAppStore from '../../app-store/reducers';
import { Store, select } from '@ngrx/store';
import { AppleActions, BananaActions } from 'src/app/app-store/actions';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fruit-salad',
  templateUrl: './fruit-salad.component.html',
  styleUrls: ['./fruit-salad.component.scss']
})
export class FruitSaladComponent implements OnInit {

  // ingredients = [];
  ingredients$: Observable<any>;
  // layer: string[] = [];
  salad = [];
  constructor(private store: Store<fromAppStore.State>) {
    this.salad.push(new Array<string>());

    this.ingredients$ = this.store.pipe(
      select(fromAppStore.selectAppleBananaList),
    )
  }
  ngOnInit() {
    this.store.dispatch(AppleActions.loadApples());
    this.store.dispatch(BananaActions.loadBananas());
  }

  onAddLayer() {
    this.salad.push([]);
  }

  onSave(){

  }

  onClear(){
    this.salad.length = 0;
    this.onAddLayer();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.previousContainer.id !== 'master-list' && event.container.id === 'master-list') {
      this.salad[+event.previousContainer.id].splice(event.previousIndex, 1);
      if (this.salad[+event.previousContainer.id].length === 0) {
        this.salad.splice(+event.previousContainer.id, 1);
      }
    } else if (event.previousContainer.id !== 'master-list' && event.container.id !== 'master-list' ) { 
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if (this.salad[+event.previousContainer.id].length === 0) {
        this.salad.splice(+event.previousContainer.id, 1);
      }
    } 
    else {

      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
