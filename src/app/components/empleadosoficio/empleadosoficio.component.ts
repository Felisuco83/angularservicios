import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {
  public empleados: Array<Empleado>;
  public oficios: Array<string>;
  @ViewChild("cajaoficio") cajaoficio: ElementRef;
  buscarEmpleados() {
    this._service.getEmpleadosOficio(this.cajaoficio.nativeElement.value).subscribe(response => {
      console.log("Peticion correcta");
      this.empleados = response;
    }, error => {
      console.log("Ha habido un error en la peticion");
    })
  }
  constructor(private _service: EmpleadoService) { 
    this.empleados = [];
  }

  ngOnInit(): void {
    this._service.getOficios().subscribe(resp => {
      console.log("Peticion oficios correcta");
      this.oficios = resp;
    }, error => {
      console.log("Peticion oficios con errores");
    });
  }

}
