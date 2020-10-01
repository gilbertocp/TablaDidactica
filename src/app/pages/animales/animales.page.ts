import { Component, OnInit } from '@angular/core';
import { Entidad } from '../../classes/Entidad';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {

  animales: Entidad[] = [
    {
      nombre:  'cerdo',
      urlImg: 'assets/img/animales/cerdo.png',
      color: '#01bc87',
      tipo: 'animales'
    },
    {
      nombre:  'gato',
      urlImg: 'assets/img/animales/gato.png',
      color: '#0194bc',
      tipo: 'animales'
    },
    {
      nombre:  'jirafa',
      urlImg: 'assets/img/animales/jirafa.png',
      color: '#01b9bc',
      tipo: 'animales'
    },
    {
      nombre:  'oso',
      urlImg: 'assets/img/animales/oso.png',
      color: '#bc019a',
      tipo: 'animales'
    },
    {
      nombre:  'perro',
      urlImg: 'assets/img/animales/perro.png',
      color: '#015cbc',
      tipo: 'animales'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
