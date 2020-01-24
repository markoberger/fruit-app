import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banana } from '../core/core/models/banana';

@Injectable({
  providedIn: 'root'
})
export class BananaTestService {

  constructor(private http: HttpClient) { }

  getBananas(){
    return this.http.get<Banana[]>('api/bananasArt');
  }
}
