import { ArticulosProvider } from './../../providers/articulos/articulos';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { ArticulosAddPage } from './../articulos-add/articulos-add';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ArticuloEditPage } from '../articulo-edit/articulo-edit';

/**
 * Generated class for the ArticulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articulos',
  templateUrl: 'articulos.html',
})
export class ArticulosPage {
  searchTerm;
  articulos_get:any;
  articulos:AngularFirestoreCollection;
  productos:any;
  productos_auxi:any;
    constructor  (public navCtrl: NavController, public navParams: NavParams,private asf: AngularFirestore,public provArtic:ArticulosProvider,private alertCtrl: AlertController) {
    this.getProducto();
  }
  async getProducto(){
   
    var resultado =  this.provArtic.articulos();
      resultado.subscribe(data => {
        if(data.length > 0){
          this.productos=data;
          this.productos_auxi=data;
        }
      }, error => {
        alert('Error verifica tu conexion a internet');
      });
    
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticulosPage');
  }
  goToArticulosAdd(){
    this.navCtrl.push(ArticulosAddPage)
  }
  
  setFilteredItems(){ 
    if(this.searchTerm ==null || this.searchTerm == ""){
      this.productos=this.productos_auxi;
    }
    
    else{
      this.productos=this.productos_auxi;
      this.productos = this.filterItems(this.searchTerm);       
    }
  }
/*
  setFilteredItems() {
    this.productos = this.filterItems(this.searchTerm);
    }
*/
  filterItems(searchTerm){
    return this.productos.filter((item) => {
     return item.producto.toLowerCase().indexOf(
       searchTerm.toLowerCase()) > -1;
     });
    }
  edit(item){
    this.navCtrl.push(ArticuloEditPage,item)
  }
  delete(item) {
    let alert = this.alertCtrl.create({
      title: '¿Borrar este producto?',
      message: '',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.delete2(item);
          }
        }
      ]
    });
    alert.present();
  }
  delete2(item){
    this.asf.collection('articulos').doc(item.id.toString()).delete();
  }
}
