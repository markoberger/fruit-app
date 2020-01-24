import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Banana } from './models/banana';
import { Artikl } from './models/artikl';
import { ArtiklState } from './models/artikl-state.enum';
import { Apple } from './models/apple';


interface Db {
  [collectionName: string]: any[];
}

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo) {
    return { bananasArt, applesArt }
  }

}
const bananasArt: (Banana & Artikl) [] = [
  {
    'id': 'f425c7be-81fb-4659-97bb-5282f83fb8f8',
    'state': ArtiklState.IN_STOCK,
    'isPeeled': false,
    'color': 'yellow',
    'bitesRemaining': 9
  },
  {
    'id': 'ad379ada-6a6b-4655-8e7c-6bc8997274a8',
    'state': ArtiklState.OUT_OF_STOCK,
    'isPeeled': true,
    'color': 'brown',
    'bitesRemaining': 6
  },
  {
    'id': 'a69eda2e-96cd-44df-b16c-6a3d0e742d3d',
    'state': ArtiklState.PRE_ORDER,
    'isPeeled': false,
    'color': 'green',
    'bitesRemaining': 9
  },
];

const applesArt: (Apple & Artikl) [] = [
  {
    'id': '2404e1df-5a85-443f-ba5d-ea77ce862a1d',
    'state': ArtiklState.IN_STOCK,
    'isWashed': false,
    'variety': 'Idared',
    'color': 'red'
  },
  {
    'id': '8ac3a72f-9147-49e5-adff-88849bd2ee0d',
    'state': ArtiklState.OUT_OF_STOCK,
    'isWashed': true,
    'variety': 'Granny',
    'color': 'yellow'
  },
  {
    'id': '1e64d170-b4a4-4f72-8260-7d0b3a6faff7',
    'state': ArtiklState.PRE_ORDER,
    'isWashed': false,
    'variety': 'Plane',
    'color': 'red-yellow'
  },
]
