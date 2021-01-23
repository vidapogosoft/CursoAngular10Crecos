import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Pais1Component } from './pais1/pais1.component';
import { Pais2Component } from './pais2/pais2.component';
import { Pais3Component } from './pais3/pais3.component';
import { SorteoComponent } from './sorteo/sorteo.component';
import { DadoComponent } from './dado/dado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { ProximoComponent } from './proximo/proximo.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { MinMaxComponent } from './min-max/min-max.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';
import { ConsultaarticulosComponent } from './consultaarticulos/consultaarticulos.component';


import { HttpClientModule } from '@angular/common/http';
import { ApirestGetComponent } from './apirest-get/apirest-get.component';

//import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    Pais1Component,
    Pais2Component,
    Pais3Component,
    SorteoComponent,
    DadoComponent,
    CronometroComponent,
    ProximoComponent,
    SelectornumericoComponent,
    MinMaxComponent,
    ListadoarticulosComponent,
    ConsultaarticulosComponent,
    ApirestGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
