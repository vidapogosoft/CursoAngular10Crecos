import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultaarticulos',
  templateUrl: './consultaarticulos.component.html',
  styleUrls: ['./consultaarticulos.component.css']
})
export class ConsultaarticulosComponent implements OnInit {

  articulos = [

    {codigo: 1, descripcion: 'Celulares', precio:120},
    {codigo: 1, descripcion: 'Radios', precio:400},
    {codigo: 1, descripcion: 'SmartTv', precio:820},
    {codigo: 1, descripcion: 'Play Sation', precio:720},

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
