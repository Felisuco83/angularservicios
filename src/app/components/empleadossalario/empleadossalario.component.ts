import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleadossalario',
  templateUrl: './empleadossalario.component.html',
  styleUrls: ['./empleadossalario.component.css']
})
export class EmpleadossalarioComponent implements OnInit {
  public empleados: Array<Empleado>;
  @ViewChild("cajasalario") cajasalario: ElementRef;

  buscarEmpleados() {
    var salario = this.cajasalario.nativeElement.value;
    this._service.getEmpleadosSalario(salario).subscribe(response => {
      console.log("Peticion correcta");
      this.empleados = response;
    }, error =>{
      console.log("Ha habido un error en la petición")
    })
  }
  constructor(private _service: EmpleadoService) { 
    this.empleados = [];
  }

  ngOnInit(): void {

  }

}
