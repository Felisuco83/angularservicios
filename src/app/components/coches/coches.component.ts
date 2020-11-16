import { Component, OnInit } from '@angular/core';
import { CocheService } from 'src/app/services/coche.service';
import {Coche} from './../../models/coche'

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [CocheService]
})
export class CochesComponent implements OnInit {
  public coches: Array<Coche>;

  constructor(private _service: CocheService) { }

  ngOnInit(): void {
    this._service.getCoches().subscribe(resp =>{
      console.log(resp);
      this.coches = resp;
    }, error => {
      console.log("Ha habido un error en la petición");
    })
  }

}
