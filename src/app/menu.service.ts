import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MenuService {

  private menuVisible = new BehaviorSubject<boolean>(false);
  currentMenuVisible = this.menuVisible.asObservable();

  constructor() {}

  changeVisibility(visible: boolean): void {
    this.menuVisible.next(visible);
  }

}
