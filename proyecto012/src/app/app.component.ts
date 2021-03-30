import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/articulos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  
  articulos = null;

  constructor(private articulosServicio: ArticulosService)
  {}

  ngOnInit()
  {
    this.articulos = this.articulosServicio.retornar();
  }

}
