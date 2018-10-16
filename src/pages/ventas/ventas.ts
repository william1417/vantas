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
   total:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalController: ModalController ) {
    this.total=100;
   /*

    var booktemp = {
        "id" : "po-0167"
    };
    this.book.push(booktemp);

     var booktemp2 = {
        "date" : new Date(1980, 2, 24)
    };
    this.book.push(booktemp2);

     var booktemp3 = {
        "quantity" : 1
    };
    this.book.push(booktemp3);

    var booktemp4 = {
        "amount" : 4
    };
    this.book.push(booktemp4);

     var booktemp5 = {
        "title" : "A Book About Nothing"
    };
    this.book.push(booktemp5);
*/
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad VentasPage');
  }
  tapEvent(event){
    //console.log(event);
    
  }
  show() {
    const modal = this.modalController.create(ModalPage,{ busqueda:this.searchTerm });
    
    modal.onDidDismiss(data => {
      console.log(data);
      this.productos.push(data)
    });
    
    modal.present();
  }

}
