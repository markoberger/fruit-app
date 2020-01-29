import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-fruit-salad',
  templateUrl: './fruit-salad.component.html',
  styleUrls: ['./fruit-salad.component.scss']
})
export class FruitSaladComponent implements OnInit {

  ingredients = [
    'dinamo', 'cibona', 'mladost'
  ];
  // layer: string[] = [];
  salad = [];
  constructor() {
    this.salad.push(new Array<string>());
   }

  ngOnInit() {
    console.log(this.salad);

  }

  onAddLayer() {
    this.salad.push([]);
    console.log(this.salad);
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.previousContainer.id !== 'master-list') {

      this.salad[+event.previousContainer.id].splice(event.previousIndex, 1);
      if (this.salad[+event.previousContainer.id].length === 0) {
        this.salad.splice(+event.previousContainer.id, 1);
      }

    } else {

      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
