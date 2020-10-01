import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColoresPageRoutingModule } from './colores-routing.module';

import { ColoresPage } from './colores.page';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonsTableComponent } from '../../components/buttons-table/buttons-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColoresPageRoutingModule
  ],
  declarations: [
    ColoresPage,
    ButtonsComponent,
    HeaderComponent,
    ButtonsTableComponent
  ]
})
export class ColoresPageModule {}
