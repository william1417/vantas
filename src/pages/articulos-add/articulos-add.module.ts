import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticulosAddPage } from './articulos-add';

@NgModule({
  declarations: [
    ArticulosAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticulosAddPage),
  ],
})
export class ArticulosAddPageModule {}
