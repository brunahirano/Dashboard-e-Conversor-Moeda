import { DadosService } from './servicos/dados.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClient, HttpClientModule} from '@angular/common/http'
//Esse import possibilita utilizar forms no angular
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ConversorComponent } from './componentes/conversor/conversor.component'

//para usar formGroup do conversor.html e ts
import { ReactiveFormsModule } from '@angular/forms';
//para usar o ng if dentro da div
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ConversorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
