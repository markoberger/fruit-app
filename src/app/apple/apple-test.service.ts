import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apple } from '../core/core/models/apple';
import { Artikl } from '../core/core/models/artikl';

@Injectable({
  providedIn: 'root'
})
export class AppleTestService {

  constructor(private http: HttpClient) { }

  getApples(){
    return this.http.get<(Apple & Artikl)[]>('api/applesArt');
  }
}
