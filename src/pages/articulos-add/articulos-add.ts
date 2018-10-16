import { UserDataService } from './../../services/userData.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

/**
 * Generated class for the ArticulosAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articulos-add',
  templateUrl: 'articulos-add.html',
})
export class ArticulosAddPage {
  producto:string;
  categoria:any;
  UM:any;
  precio:any;
  descripcion:any;
  codigo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public asf: AngularFirestore,
    public http:HttpClientModule,public userData:UserDataService,public loadingCtrl: LoadingController) {
      this.UM=1;
      this.categoria=1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticulosAddPage');
  }
  presentLoadingDefault() {
    var loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
  

  save(){//guarda los datos en collections 
    if( typeof(this.producto) != 'undefined' && typeof(this.precio) != 'undefined' && this.producto.trim().length != 0 &&  this.precio.trim().length != 0){
      var loading = this.loadingCtrl.create({
        content: 'Guardando...',
        //spinner: 'circles',
        //spinner: 'bubbles',
        spinner: 'dots'
        //spinner: 'ios',
      });
      loading.present();
      var id = Date.now();
      var producto = this.producto.toUpperCase();
      var precio = this.precio;
      var categoria = parseInt(this.categoria);
      var UM = parseInt(this.UM);
      var descripcion = this.descripcion;
      var estatus = 'activo';
      var id_user=this.userData.userID;
      var codigo=this.codigo; 
      var existencia=0;
      this.asf.collection('articulos').doc(''+id).set({id,id_user,producto,codigo,precio,categoria,UM,descripcion,existencia,estatus}).then(newItem =>{
        this.precio="";
        this.descripcion="";
        this.producto="";
        this.codigo="";
        this.UM=1;
        this.categoria=1;
        loading.dismiss();
      }).catch(err =>{
        console.error(err);      
        loading.dismiss();
      })
    }
    else{
      alert('verifica el campo de nombre de producto y/o precio');
    }
    
  }
}
