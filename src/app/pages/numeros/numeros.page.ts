import { Component, OnInit } from '@angular/core';
import { IdiomasService } from '../../services/idiomas.service';
import { Entidad } from '../../classes/Entidad';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  numeros: Entidad[] = [
    {
      nombre: 'cinco',
      tipo: 'numeros',
      etiqueta: '5',
      color: '#dd0270'
    },
    {
      nombre: 'nueve',
      tipo: 'numeros',
      etiqueta: '9',
      color: '#dd0270'
    },
    {
      nombre: 'ocho',
      tipo: 'numeros',
      etiqueta: '8',
      color: '#dd0270'
    },
    {
      nombre: 'seis',
      tipo: 'numeros',
      etiqueta: '6',
      color: '#dd0270'
    },
    {
      nombre: 'uno',
      tipo: 'numeros',
      etiqueta: '1',
      color: '#dd0270'
    },
  ]

  constructor(public idiomaService: IdiomasService) { }

  ngOnInit() {
  }

}
