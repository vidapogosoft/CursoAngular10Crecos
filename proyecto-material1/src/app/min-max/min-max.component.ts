import { Component, OnInit, ViewChild } from '@angular/core';

import { SelectornumericoComponent } from '../selectornumerico/selectornumerico.component';

@Component({
  selector: 'app-min-max',
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.css']
})
export class MinMaxComponent implements OnInit {

  @ViewChild('selector1') selector1: SelectornumericoComponent
  @ViewChild('selector2') selector2: SelectornumericoComponent

  constructor() { }

  ngOnInit(): void {
  }

  fijarSelector1(valor:number)
  {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor:number)
  {
    this.selector2.fijar(valor);
  }


}
