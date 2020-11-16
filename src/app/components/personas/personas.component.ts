import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from '../../services/persona.service'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  providers: [PersonaService],
})
export class PersonasComponent implements OnInit {
  public personas : Array<Persona>;

  constructor( private _service: PersonaService) { }

  ngOnInit(): void {
    // this._service.mostrarMensaje();
    this._service.getPersonas().subscribe(response => {
      console.log(response);
      this.personas = response;
    }, error => {
      console.log("Error en la peticion");
    })
  }

}
