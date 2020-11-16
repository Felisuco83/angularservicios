import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';

@Injectable()
export class PersonaService {
    public url: string;
    constructor(private _http: HttpClient) {
        this.url = Global.urlPersonas;
    }
    mostrarMensaje() {
        console.log("mensaje");
    }

    getPersonas(): Observable<any> {
        var request = "api/personas";
        return this._http.get(this.url + request);
    }
}