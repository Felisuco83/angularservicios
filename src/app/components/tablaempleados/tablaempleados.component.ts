import { Component, OnInit } from '@angular/core';
import { EmpleadosRoutingService } from '../../services/empleadosrouting.service';
import { Empleado } from './../../models/empleado';

@Component({
  selector: 'app-tablaempleados',
  templateUrl: './tablaempleados.component.html',
  styleUrls: ['./tablaempleados.component.css'],
  providers: [EmpleadosRoutingService],
})
export class TablaempleadosComponent implements OnInit {
  public empleados: Array<Empleado>;
  constructor(private _service: EmpleadosRoutingService) {
    this.empleados = [];
  }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(
      (response) => {
        this.empleados = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
