import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const peoples = [];
    return peoples;
  }

  constructor() { }

}
