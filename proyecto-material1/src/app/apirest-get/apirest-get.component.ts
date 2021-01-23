import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apirest-get',
  templateUrl: './apirest-get.component.html',
  styleUrls: ['./apirest-get.component.css']
})
export class ApirestGetComponent implements OnInit {

  articulos = null;

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {

    this.http.get("http://scratchya.com.ar/vue/datos.php")
    .subscribe(
        result => {
          this.articulos = result;
        },
        error => {
            console.log('Error');
        }
        
    );

  }

}
