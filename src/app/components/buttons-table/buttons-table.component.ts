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

  ngOnInit() {  }

  reproducirAudio(url: string): void {
    const audio = new Howl({
      src: url
    });

    audio.play();
  }

}
