import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http:HttpClient){}


   buscar(tematica:string):Observable<Resultado[]>{
    let url:string ="http://localhost:9000/buscar/"+tematica;
    return this.http.get<Resultado[]>(url);
  }

  alta(libro:Resultado):Observable<string>{
   // console.log("Llamada en alta del service");
    let url:string ="http://localhost:9000/alta";
    return this.http.post<string>(url, libro);

   // console.log("Fin Llamada en alta del service");
  }
  buscarUrl(url:string):Observable<Resultado>{
    let urlBase:string ="http://localhost:9000/buscarPorUrl";
    return this.http.get<Resultado>(urlBase+"?url="+url);
  }
}
