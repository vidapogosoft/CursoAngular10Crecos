import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  
  title = 'formulario-bootstrap';

  contacto: FormGroup;
  submitted = false;

  titulo = 'Formulario BootStrap y Angular'

  constructor(private formBuilder: FormBuilder){}

  ngOnInit()
  {
      this.contacto = this.formBuilder.group(
      {
          nya: ['', Validators.required],
      }
    )

  }

onSubmit()
{
    this.submitted = true;

    if (this.contacto.invalid)
    {
      return;
    }

    alert('Mensaje Enviado con formulario lleno');

}


}
