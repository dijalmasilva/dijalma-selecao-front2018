import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header-fixed',
  templateUrl: './header-fixed.component.html',
  styleUrls: ['./header-fixed.component.css']
})
export class HeaderFixedComponent implements OnInit {

  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  setMenuVisible(): void {
    this.menuService.changeVisibility(true);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
