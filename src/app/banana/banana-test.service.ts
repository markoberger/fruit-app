import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banana } from '../core/core/models/banana';
import { Artikl } from '../core/core/models/artikl';

@Injectable({
  providedIn: 'root'
})
export class BananaTestService {

  constructor(private http: HttpClient) { }

  getBananas(){
    console.log('Dinamo');
    
    return this.http.get<(Banana & Artikl)[]>('api/bananasArt');
  }
}
