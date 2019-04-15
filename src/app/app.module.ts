import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlertSuccessComponent } from './login/alert-success/alert-success.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { HomeRowComponent } from './home/home-list/home-row/home-row.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AlertSuccessComponent,
    HomeListComponent,
    HomeRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
