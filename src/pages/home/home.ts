import { VentasPage } from './../ventas/ventas';
import { ArticulosPage } from './../articulos/articulos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToArticulos(){
    this.navCtrl.push(ArticulosPage)
  }
  goToVentas(){
    this.navCtrl.push(VentasPage)
  }
}
