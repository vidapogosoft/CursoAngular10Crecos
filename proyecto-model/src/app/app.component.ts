import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyecto-model';

  art ={
    codigo:null,
    descripcion:null,
    precio:null

  }

  articulos = [
    {codigo: 1, descripcion: 'Manzanas', precio: 0.25},
    {codigo: 2, descripcion: 'Sandias', precio: 2.50},
    {codigo: 3, descripcion: 'Cocos', precio: 1.25},
    {codigo: 4, descripcion: 'Uvas', precio: 2.00},
    {codigo: 5, descripcion: 'Bananas', precio: 0.15}
  ];


  HayRegistros(){

    return this.articulos.length > 0;

  }

  seleccionar(art)
  {
      this.art.codigo = art.codigo;
      this.art.descripcion = art.descripcion;
      this.art.precio = art.precio;
  }

  agregar()
  {
    //valido si ya existe
    for(let x=0; x < this.articulos.length; x++)
    if(this.articulos[x].codigo == this.art.codigo)
    {
      alert('Producto ya existe con ese codigo');
      return;
    }

    //agrego registro
    this.articulos.push(
          {
              codigo: this.art.codigo,
              descripcion: this.art.descripcion,
              precio: this.art.precio
          }
    );

  }

  borrar (art)
  {
    for(let x=0; x < this.articulos.length; x++)
    if(this.articulos[x].codigo == art.codigo)
    {
          this.articulos.splice(x,1);
    }

  }

  modificar()
  {
    alert (" Articulo a modificar codigo:" + this.art.codigo);
    for(let x=0; x < this.articulos.length; x++)
    {
      if(this.articulos[x].codigo = this.art.codigo)
      {
        this.articulos[x].descripcion = this.art.descripcion; 
        this.articulos[x].precio = this.art.precio; 
      }
    }
    
  }

}
