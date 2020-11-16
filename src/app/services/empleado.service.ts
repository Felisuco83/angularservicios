import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class EmpleadoService {
    public url: string;
    constructor(private _http: HttpClient) {
        this.url = Global.urlEmpleados;
    }
    getEmpleadosSalario(salario: string): Observable<any> {
        return this._http.get(this.url + "api/empleados/empleadossalario/" + salario);
    }
    getEmpleadosOficio(oficio: string): Observable<any> {
        return this._http.get(this.url + "api/empleados/empleadosoficio/" + oficio);
    }
    getOficios():Observable<any> {
        return this._http.get(this.url + "api/empleados/oficios");
    }
}