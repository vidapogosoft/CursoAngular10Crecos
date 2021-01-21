import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proximo',
  templateUrl: './proximo.component.html',
  styleUrls: ['./proximo.component.css']
})
export class ProximoComponent implements OnInit {

  mensaje = '';

  constructor() { }

  actualizar(t)
  {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }


  ngOnInit(): void {
  }

}
