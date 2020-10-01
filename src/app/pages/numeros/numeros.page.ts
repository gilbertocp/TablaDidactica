import { Component, OnInit } from '@angular/core';
import { IdiomasService } from '../../services/idiomas.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  constructor(public idiomaService: IdiomasService) { }

  ngOnInit() {
  }

  reproducir(el: HTMLAudioElement) {
    el.paused? el.play(): el.pause();
  }
}
