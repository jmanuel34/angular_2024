import { BuscadorService } from './../../service/buscador.service';
import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  // Al declararlo como private es como declarar un atributo
  constructor(private buscadorService: BuscadorService){

  }

   tematica:string;
   //guardaremos los resultados de la búsqueda
   resultados:Resultado[];
   buscar():void{

    this.resultados=this.buscadorService.buscar(this.tematica);
   }
}
