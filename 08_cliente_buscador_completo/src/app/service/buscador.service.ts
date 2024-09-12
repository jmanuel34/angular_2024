import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USER } from '../custom_properties';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http:HttpClient){

  }

  buscar(tematica:string):Observable<Resultado[]>{
    let url:string="http://localhost:9000/buscar/"+tematica;
    return this.http.get<Resultado[]>(url);
  }

  alta(resultado:Resultado):Observable<string>{
    console.log("llamado a alta en service")
    let url:string="http://localhost:9000/alta";
//    return this.http.post<string>(url,resultado);
// Supongamos que el recurso esta securizado

    let codificado=btoa(USER+":+PASS");
    let head = new HttpHeaders();
    // Cuando son tokens se usa la palabra Bearer
    head.set("Authorization", " Basic "+codificado);
    return this.http.post<string>(url,resultado, {headers:head});
    //
  }
  /*
  buscarurl(url:string):Observable<Resultado>{
    let urlbase:string="http://localhost:9000/buscar?url="+url;
    return this.http.get<Resultado>(urlbase);

  }
  //*/
  buscarurl(url:string):Observable<Resultado>{
    let params=new HttpParams();
    params=params.set("url", url);
   // params=params.set("otro", otro);
    let urlbase:string="http://localhost:9000/buscarPorUrl";
    return this.http.get<Resultado>(urlbase, {params:params});
  }
}
