import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pais1Component } from './pais1/pais1.component';
import { Pais2Component } from './pais2/pais2.component';
import { Pais3Component } from './pais3/pais3.component';
import { SorteoComponent } from './sorteo/sorteo.component';

//ProximoComponent
import { ProximoComponent } from './proximo/proximo.component';

import { MinMaxComponent } from './min-max/min-max.component';

import { ApirestGetComponent } from './apirest-get/apirest-get.component';

import { ConsultaarticulosComponent } from './consultaarticulos/Consultaarticulos.Component';


const routes: Routes = [
  {path: 'pais1', component: Pais1Component},
  {path: 'pais2', component: Pais2Component},
  {path: 'pais3', component: Pais3Component},
  {path: 'sorteo', component: SorteoComponent},
  {path: 'proximo', component: ProximoComponent},
  {path: 'minmax', component: MinMaxComponent},
  {path: 'get', component: ApirestGetComponent},
  {path: 'articulo', component: ConsultaarticulosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
