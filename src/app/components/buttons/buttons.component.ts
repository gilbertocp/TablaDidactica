import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdiomasService } from '../../services/idiomas.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {

  constructor(
    private router: Router,
    private idiomaService: IdiomasService
  ) { 
  
  }

  ngOnInit() {  
    console.log(this.idiomaService.getIdioma);
  }

  cambiarIdioma(idioma: string) {
    this.idiomaService.setIdioma = idioma;
  }

  cambiarRuta(ruta: string) {
    this.router.navigate(['/' + ruta]);
  }
}
