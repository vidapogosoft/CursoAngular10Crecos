import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  retornar(){

    return[

      {
        codigo: 1,
        descripcion: 'Laptop HP Pavilion',
        precio: 750.80
      },

      {
        codigo: 2,
        descripcion: 'Laptop ASUS version 2020',
        precio: 850.80
      },

      {
        codigo: 3,
        descripcion: 'Laptop Dell Legion',
        precio: 1200.50
      },

      {
        codigo: 4,
        descripcion: 'Monitor HP full HD 25 pulg',
        precio: 80.00
      },

      {
        codigo: 5,
        descripcion: 'Laptop Lenovo 15 pulg TouchScreen',
        precio: 600
      }

    ]

  }

}
