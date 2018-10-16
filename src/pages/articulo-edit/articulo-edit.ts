import { AngularFirestore } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the ArticuloEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articulo-edit',
  templateUrl: 'articulo-edit.html',
})
export class ArticuloEditPage {
  item:any;
  producto:string;
  categoria:any;
  UM:any;
  precio:any;
  descripcion:any;
  codigo:any;
  updateItem = {producto: '',categoria:0, precio: 0,UM:0, descripcion: '',codigo: ''}
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public asf: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticuloEditPage');
    this.item = this.navParams.data;
    console.log(this.item);
    this.load_data();
    
  }

  load_data(){
    this.categoria = this.item.categoria;
    this.producto = this.item.producto;
    this.UM = this.item.UM;
    this.precio = this.item.precio;
    this.descripcion = this.item.descripcion;
    this.codigo = this.item.codigo;

  }

  save(){//guarda los datos en collections 
    if(this.producto.trim().length != 0 &&  this.precio.trim().length != 0){
      var loading = this.loadingCtrl.create({
        content: 'Guardando...',
        //spinner: 'circles',
        //spinner: 'bubbles',
        spinner: 'dots'
        //spinner: 'ios',
      });
      loading.present();
      this.updateItem = {
        producto: this.producto.toUpperCase(),
        categoria: this.categoria,
        precio: this.precio,
        UM: parseInt(this.UM),
        descripcion: this.descripcion,
        codigo: this.codigo,
      };
      console.log(this.updateItem);
      this.asf.collection('articulos').doc(this.item.id.toString()).update(this.updateItem);
      loading.dismiss();
      this.navCtrl.pop();
    }
  }
}
