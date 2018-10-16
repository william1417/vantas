import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticuloEditPage } from './articulo-edit';

@NgModule({
  declarations: [
    ArticuloEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticuloEditPage),
  ],
})
export class ArticuloEditPageModule {}
