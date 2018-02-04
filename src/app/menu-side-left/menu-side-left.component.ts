import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-side-left',
  templateUrl: './menu-side-left.component.html',
  styleUrls: ['./menu-side-left.component.css']
})
export class MenuSideLeftComponent implements OnInit {

  isMenuVisible: boolean;
  isRegisterMenu: boolean;
  isListMenu: boolean;

  constructor(private menuService: MenuService) {
    this.isRegisterMenu = this.isListMenu = false;
  }

  ngOnInit() {
    this.menuService.currentMenuVisible.subscribe(visibility => {
      this.isMenuVisible = visibility;
    });
    this.setInvisible();
  }

  setInvisible(): void {
    this.menuService.changeVisibility(false);
  }

  interationMenu(nameItem: string): void {
    if (nameItem === 'register') {
      this.changeIsRegisterMenu();
    }else {
      this.changeIsListMenu();
    }
  }

  private changeIsRegisterMenu(): void {
    this.isRegisterMenu = !this.isRegisterMenu;
  }

  private changeIsListMenu(): void {
    this.isListMenu = !this.isListMenu;
  }
}
