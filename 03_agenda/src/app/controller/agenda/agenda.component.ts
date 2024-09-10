import { Contacto } from './../../model/Contacto';
import { Component } from '@angular/core';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  agenda:Contacto[]=[];
  nombre:string;
  edad:number;
  telefono:string;
  contenido:boolean=false;

  // Respuesta al evento guardar
  guardar(): void {
    this.agenda.push(new Contacto(this.nombre, this.edad, this.telefono));
    this.contenido=true;
  }
}
