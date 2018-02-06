import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TextMaskModule } from 'angular2-text-mask';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderFixedComponent } from './header-fixed/header-fixed.component';
import { FooterFixedComponent } from './footer-fixed/footer-fixed.component';
import { ChartsComponent } from './charts/charts.component';
import { MenuSideLeftComponent } from './menu-side-left/menu-side-left.component';
import { MenuService } from './menu.service';
import { RegisterPersonComponent } from './register-person/register-person.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { StatesService } from './states.service';
import { InMemoryDataService } from './in-memory-data.service';
import { PersonService } from './person.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderFixedComponent,
    FooterFixedComponent,
    ChartsComponent,
    MenuSideLeftComponent,
    RegisterPersonComponent,
    PersonsComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    TextMaskModule
  ],
  providers: [MenuService, StatesService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
