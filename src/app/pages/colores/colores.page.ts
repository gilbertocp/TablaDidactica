import { Component, OnInit } from '@angular/core';
import { IdiomasService } from '../../services/idiomas.service';
import { Entidad } from '../../classes/Entidad';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  colores: Entidad[] = [
    {
      nombre:  'amarillo',
      color: '#fff423',
      tipo: 'colores'
    },
    {
      nombre:  'azul',
      color: '#2e23ff',
      tipo: 'colores'
    },
    {
      nombre:  'morado',
      color: '#9c23ff',
      tipo: 'colores'
    },
    {
      nombre:  'naranja',
      color: '#ff9123',
      tipo: 'colores'
    },
    {
      nombre:  'rojo',
      color: '#dd0202',
      tipo: 'colores'
    }
  ]

  constructor(public idiomaService: IdiomasService) { }

  ngOnInit() {
  }

}
