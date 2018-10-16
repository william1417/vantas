import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ArticulosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticulosProvider {
  articulosGet:AngularFirestoreCollection;
  constructor(public http: HttpClient,public asf: AngularFirestore) {
    console.log('Hello ArticulosProvider Provider');
  }

  articulos () {
     this.articulosGet  = this.asf.collection('articulos',ref => ref.where('estatus','==','activo'));
     return this.articulosGet.valueChanges();
  }
  articulosBusq(busqueda){
    this.articulosGet  = this.asf.collection('articulos',ref => ref.orderBy('producto')
    .limit(5)
    .startAt(busqueda)
    .endAt(busqueda+'\uf8ff'))
     return this.articulosGet.valueChanges();
  }
}
