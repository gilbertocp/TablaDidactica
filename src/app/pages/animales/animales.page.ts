import { Component, OnInit } from '@angular/core';
import { IdiomasService } from '../../services/idiomas.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {

  constructor(public idiomaService: IdiomasService) { }

  ngOnInit() {
  }

}
