import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';
import { BuscadorService } from '../../service/buscador.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  constructor(private buscadorService: BuscadorService){

  }
  libro:Resultado=new Resultado("","","");
  mensaje:string;
  alta():void {
   // console.log("Llamada en alta del componente");
    this.buscadorService.alta(this.libro).subscribe(data=>{
      // NO necesita Boolean(data). Convierte implicitamente
      if(Boolean(data)){
        this.mensaje="Grabado correcto";
      } else "Fallo";
    });

   // console.log("Fin de Llamada en alta del componente");
   }
}
