import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pago',
  templateUrl: 'pago.html',
})
export class PagoPage {
  lista:any;
  total:any;
  pago:any;
  retorno:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista = navParams.data;
    this.total=0;
    this.cuenta();
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagoPage');
  }
  cuenta(){
    for (let index = 0; index < this.lista.length; index++) {
      const element = this.lista[index];
      this.total = parseFloat(element.precio)+this.total;
    }
  }
  resta(){
    this.retorno=parseFloat(this.pago)-parseFloat(this.total);
    if(this.retorno< 0){
      this.retorno=0;
    }
  }

}
