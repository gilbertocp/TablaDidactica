import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

  private idioma: string;

  constructor() { 
    this.idioma = 'es';
  }

  get getIdioma() {
    return this.idioma;
  }

  set setIdioma(idioma: string) {
    this.idioma = idioma;
  }

  private urlAudios(directorio: string, entidad: string): string {
    return `assets/audio/${this.idioma}/${directorio}/${entidad}.mp3`;
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
