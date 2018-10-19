import { PagoPage } from './../pago/pago';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { ModalPage } from './modal.page';
/**
 * Generated class for the VentasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ventas',
  templateUrl: 'ventas.html',
})
export class VentasPage {
  //nombre:any;
  // book = [];
   searchTerm;
   productos=[];
   total:number;
   
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalController: ModalController ) {
    this.total=0;
    
  }
  ionViewDidLoad() {
  }
  tapEvent(event){
  }
  show(){
    const modal = this.modalController.create(ModalPage,{ busqueda:this.searchTerm });
    modal.onDidDismiss(data => {
      if(data != null){
        this.productos.push(data);
        this.total=this.total+parseFloat(data.precio);
        console.log(this.productos);
      }
    });
    modal.present();
  }
  clean_list(){
    this.productos=[];
    this.total=0;
  }
  delete(index,i){
    this.total=this.total-parseFloat(this.productos[i].precio);
    this.productos.splice(i, 1);
  }
  pagar(){
    if(this.productos.length > 0){
      const modal = this.modalController.create(PagoPage,this.productos);
      modal.onDidDismiss(data => {
      });
      modal.present();
    }
    else{
      alert('NO HAY PRODUCTOD EN LA LISTA DE COMPRAS')
    }
  }
}
