import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../classes/user';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  cities: Array<String>;

  constructor(
    private router: Router,
    private statesService: StatesService
  ) { }

  ngOnInit() {
    this.createUserEmpty();
    this.getCities();
  }

  createUserEmpty(): void {
    this.user = new User();
  }

  login(): void {
    this.router.navigate(['/dashboard']);
  }

  getCities(): void {
    this.cities = this.statesService.getAllCities();
  }
}
