import { Component, Input, OnInit } from '@angular/core';
import { Entidad } from '../../classes/Entidad';
import { IdiomasService } from '../../services/idiomas.service';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-buttons-table',
  templateUrl: './buttons-table.component.html',
  styleUrls: ['./buttons-table.component.scss'],
})
export class ButtonsTableComponent implements OnInit {

  @Input() entidades: Entidad[];

  constructor(public idiomasSvc: IdiomasService) { }

  ngOnInit() { console.log(this.entidades) }

  reproducirAudio(url: string): void {
    const audio = new Howl({
      src: url,
      onend: () => {
        console.log('Terminó de reproducir')
      }
    });

    audio.play();
  }

}
