import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apple } from 'src/app/core/core/models/apple';
import { AppleTestService } from '../apple-test.service';
import { Artikl } from 'src/app/core/core/models/artikl';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {

  apples$: Observable<(Apple & Artikl)[]>; 
  constructor(private appleService: AppleTestService) {
    this.apples$ = this.appleService.getApples();
   }

  ngOnInit() {
  }

}
