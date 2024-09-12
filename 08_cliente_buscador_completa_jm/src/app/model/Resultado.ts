export class Resultado {
url:string;
tematica:string;
descripcion:string;
/*
Constructor normal
  constructor(url:string, tematica:string, descripcion:string) {
    this.url=url;
    this.tematica=tematica;
    this.descripcion=descripcion;
  }
*/
// Contructor con parametros opcionales
// Los parametros opcionales deben ser siempre los ultimos
constructor(url?:string, tematica?:string, descripcion?:string) {
  this.url=url;
  this.tematica=tematica;
  this.descripcion=descripcion;
}
}
