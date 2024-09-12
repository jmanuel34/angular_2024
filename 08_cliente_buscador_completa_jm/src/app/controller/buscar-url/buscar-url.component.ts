import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';
import { BuscadorService } from '../../service/buscador.service';

@Component({
  selector: 'app-buscar-url',
  templateUrl: './buscar-url.component.html',
  styleUrl: './buscar-url.component.css'
})
export class BuscarUrlComponent {
  resultado:Resultado;
  url: string;
  constructor(private buscadorService: BuscadorService){

  }

  buscarPorUrl():void{
    this.buscadorService.buscarUrl(this.url) //Observable<Resultado[]>
    .subscribe(data=>this.resultado=data);
   }

}
