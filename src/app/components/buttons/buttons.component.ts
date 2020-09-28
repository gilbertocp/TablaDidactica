import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {

  temaActual: string = null;
  idioma: string = 'Español';

  constructor() { 
  
  }

  ngOnInit() {
    console.log('Tema actual => '+this.temaActual)
    console.log('Idioma => '+this.idioma)
  }


  cambiarIdioma(idioma: string) {
    console.log('Cambiando a ' + idioma);
    this.idioma = idioma;
  }

  cambiarTema(tema: string) {
    this.temaActual = tema;
    console.log('Cambiando tema a ' + tema);
  }
}
