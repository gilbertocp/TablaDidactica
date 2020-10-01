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
      color: 'primary',
      tipo: 'animales'
    },
    {
      nombre:  'gato',
      urlImg: 'assets/img/animales/gato.png',
      color: 'secondary',
      tipo: 'animales'
    },
    {
      nombre:  'jirafa',
      urlImg: 'assets/img/animales/jirafa.png',
      color: 'tertiary',
      tipo: 'animales'
    },
    {
      nombre:  'oso',
      urlImg: 'assets/img/animales/oso.png',
      color: 'danger',
      tipo: 'animales'
    },
    {
      nombre:  'perro',
      urlImg: 'assets/img/animales/perro.png',
      color: 'warning',
      tipo: 'animales'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
