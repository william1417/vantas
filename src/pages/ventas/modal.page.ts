import { AngularFirestore } from 'angularfire2/firestore';
import { ArticulosProvider } from './../../providers/articulos/articulos';
import { Component } from '@angular/core';
import { AlertController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.page.html',
})
export class ModalPage {
 nombre:any;
 busca:any;
 productos:any;
 productos_auxi:any;
 resultados=[];
  constructor(public alertController: AlertController, public viewController: ViewController,public navParams: NavParams ,public viewCtrl: ViewController,private asf: AngularFirestore,public provArtic:ArticulosProvider) {
    console.log(navParams.get('busqueda'));
    this.busca=navParams.get('busqueda');
    this.getProducto();
  }
  async getProducto(){
    var resultado =  this.provArtic.articulos();
      resultado.subscribe(data => {
        if(data.length > 0){
          this.productos=data;
          this.productos_auxi=data;
          this.resultados.push(this.filterItems());
          this.resultados.push(this.filterItems2());
        }
      }, error => {
        alert('Error verifica tu conexion a internet');
  });
}
  add(item){
    let data = item;
    this.viewCtrl.dismiss(data);
  } 
  filterItems(){//por nombre de producto
    return this.productos.filter((item) => {
    return item.producto.toLowerCase().indexOf(
    this.busca.toLowerCase()) > -1;
    });
  }
  filterItems2(){//por codigo de producto
      return this.productos.filter((item) => {
      return item.codigo.toLowerCase().indexOf(
      this.busca.toLowerCase()) > -1;
    });
  }
  no_rept(item){
    return !this.resultados[0].includes(item);
  }
    
}
