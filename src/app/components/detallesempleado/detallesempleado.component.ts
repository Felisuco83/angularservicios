import { Component, OnInit } from '@angular/core';
import { EmpleadosRoutingService } from '../../services/empleadosrouting.service';
import { Empleado } from '../../models/empleado';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detallesempleado',
  templateUrl: './detallesempleado.component.html',
  styleUrls: ['./detallesempleado.component.css'],
  providers: [EmpleadosRoutingService],
})
export class DetallesempleadoComponent implements OnInit {
  public empleado: Empleado;
  constructor(
    private _service: EmpleadosRoutingService,
    private _activeRoute: ActivatedRoute
  ) {}

  buscarEmpleado(empno: string) {
    this._service.buscarEmpleado(empno).subscribe(
      (resp) => {
        this.empleado = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let idEmpleado = params.empno;
      this.buscarEmpleado(idEmpleado);
    });
  }
}
