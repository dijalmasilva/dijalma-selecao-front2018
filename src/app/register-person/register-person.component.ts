import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states.service';
import { Observable } from 'rxjs/Observable';
import { State } from '../classes/state';

@Component({
  selector: 'app-register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.css']
})
export class RegisterPersonComponent implements OnInit {

  isPhysicalPerson: boolean;
  isLegalPerson: boolean;
  states: Array<State>;
  cities: Array<String>;
  stateSelected: string;

  constructor(
    private statesService: StatesService
  ) {
    this.stateSelected = '';
  }

  ngOnInit() {
    this.choicePhysicalPerson();
    this.getStates();
    this.initCities();
  }

  changeTypeSelected(type: number) {
    if (type === 1) {
      this.choicePhysicalPerson();
    } else {
      this.choiceLegalPerson();
    }
  }

  private choicePhysicalPerson(): void {
    this.isPhysicalPerson = true;
    this.isLegalPerson = false;
  }

  private choiceLegalPerson(): void {
    this.isLegalPerson = true;
    this.isPhysicalPerson = false;
  }

  private getStates(): void {
    this.states = this.statesService.getStates();
  }

  private initCities(): void {
    this.cities = [];
  }

  public changeState(): void {
    this.cities = this.statesService.getCitiesFromState(this.stateSelected);
  }
}
