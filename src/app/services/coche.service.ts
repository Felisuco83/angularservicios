import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class CocheService {

    constructor(private _http: HttpClient){
    }
    getCoches(): Observable<any> {
         return this._http.get(Global.urlCoches+"webresources/coches");
    }
}