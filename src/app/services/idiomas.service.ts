import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

  private idioma: string;

  constructor(idioma: string = 'es') { 
    this.idioma = idioma;
  }

  private urlAudios(directorio: string, entidad: string): string {
    return `assets/audio/${this.idioma}/${directorio}/${entidad}.mp3`;
  }

  cambiarIdioma(idioma: string): void {
    this.idioma = idioma;
  }

  proveerAudioNumeros(entidad: string): string {
    return this.urlAudios('numeros', entidad);
  }

  proveerAudioColores(entidad: string): string {
    return this.urlAudios('colores', entidad);
  }

  proveerAudioAnimale(entidad: string): string {
    return this.urlAudios('animales', entidad);
  }
} 
