import { UserDataService } from './../../services/userData.service';
import { HomePage } from './../../pages/home/home';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface Usuario{
  id?:string;
}
@Injectable()
export class LoginProvider {
  categoria:AngularFirestoreCollection;
  categoria_get:any;
  navCtrl:any;
  constructor(public http: HttpClient,public asf: AngularFirestore,public userData:UserDataService ) {
   
  }

   login (nombre, pin) {
    var resultado =false;
     this.categoria  = this.asf.collection('usuarios',ref => ref.where('estatus','==','activo').where('nombre','==',nombre).where('pass','==',pin));
     return this.categoria.valueChanges();
  }
}
