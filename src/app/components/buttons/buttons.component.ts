import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


  cambiarIdioma(idioma: string) {
    console.log('Cambiando a ' + idioma);
  }

  cambiarTema(tema: string) {
    console.log('Cambiando tema a ' + tema);
  }
}
