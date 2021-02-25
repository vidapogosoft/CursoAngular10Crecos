import { Component, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'] ;

  datos: Articulo[] = [
    
      new Articulo (1,'laptop HP', 650),
      new Articulo (2,'celular xiaomi', 150),
      new Articulo (3,'camara cannon', 600)

  ];

  articulosselect: Articulo = new Articulo(0,"",0);

  @ViewChild(MatTable) tabla1: MatTable<Articulo>;

  agregar()
  {
    this.datos.push(new Articulo(this.articulosselect.codigo, this.articulosselect.descripcion,
      this.articulosselect.precio));
      this.tabla1.renderRows();
      this.articulosselect = new Articulo(0,"",0);
  }

  borrar(cod: number)
  {
    if(confirm("Desea borrarlo?"))
    {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }

}