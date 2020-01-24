import { Component, OnInit } from '@angular/core';
import { BananaTestService } from '../banana-test.service';
import { Observable } from 'rxjs';
import { Banana } from 'src/app/core/core/models/banana';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.scss']
})
export class BananaComponent implements OnInit {
  bananas$: Observable<Banana[]>;
  constructor(private bananaService: BananaTestService) {
    this.bananas$ = this.bananaService.getBananas();
   }

  ngOnInit() {
  }

}
