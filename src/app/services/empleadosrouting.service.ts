import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class EmpleadosRoutingService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urlEmpleados;
  }

  getEmpleados(): Observable<any> {
    var request = 'api/empleados';
    return this._http.get(this.url + request);
  }

  buscarEmpleado(idempleado: string): Observable<any> {
    {
      return this._http.get(this.url + 'api/empleados/' + idempleado);
    }
  }
}
