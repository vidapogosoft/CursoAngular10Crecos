import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pais1Component } from './pais1/pais1.component';
import { Pais2Component } from './pais2/pais2.component';
import { Pais3Component } from './pais3/pais3.component';
import { SorteoComponent } from './sorteo/sorteo.component';

//ProximoComponent
import { ProximoComponent } from './proximo/proximo.component';


const routes: Routes = [
  {path: 'pais1', component: Pais1Component},
  {path: 'pais2', component: Pais2Component},
  {path: 'pais3', component: Pais3Component},
  {path: 'sorteo', component: SorteoComponent},
  {path: 'proximo', component: ProximoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
