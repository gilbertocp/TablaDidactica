import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalesPageRoutingModule } from './animales-routing.module';

import { AnimalesPage } from './animales.page';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { ButtonsTableComponent } from '../../components/buttons-table/buttons-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalesPageRoutingModule
  ],
  declarations: [
    AnimalesPage,
    ButtonsComponent,
    HeaderComponent,
    ButtonsTableComponent
  ]
})
export class AnimalesPageModule {}
