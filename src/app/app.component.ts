import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fruit-app';
  opened = true; 
  extend = false;
  constructor(){};
  
  onToggle() {
    this.opened = !this.opened;
   }
  onToggleExtend() {
    this.extend = !this.extend;
   }
}
