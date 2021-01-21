import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css']
})
export class SorteoComponent implements OnInit {

valor1: number;
valor2: number;
valor3: number;
resultado: string;

  constructor() {

        this.valor1 = this.retornarAleatorio();
        this.valor2 = this.retornarAleatorio();
        this.valor3 = this.retornarAleatorio();
   }

   retornarAleatorio(){

    return Math.trunc(Math.random() * 6) + 1;

   }

   participar(){
     
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();

    if (this.valor1 == this.valor2 && this.valor1 == this.valor3)
    {
      this.resultado = 'Gano premio de un viaje'
    }
    else{
        this.resultado = 'Perdio'
    }


   }


  ngOnInit(): void {
  }

}
