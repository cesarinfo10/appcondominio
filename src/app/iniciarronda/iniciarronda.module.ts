import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IniciarrondaPage } from './iniciarronda.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarrondaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IniciarrondaPage]
})
export class IniciarrondaPageModule {}
