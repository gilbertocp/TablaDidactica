import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumerosPageRoutingModule } from './numeros-routing.module';

import { NumerosPage } from './numeros.page';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumerosPageRoutingModule
  ],
  declarations: [NumerosPage,ButtonsComponent,
    HeaderComponent]
})
export class NumerosPageModule {}
