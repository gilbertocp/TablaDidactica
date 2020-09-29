import { Component, OnInit } from '@angular/core';
import { IdiomasService } from '../../services/idiomas.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  constructor(public idiomaService: IdiomasService) { }

  ngOnInit() {
  }

}
