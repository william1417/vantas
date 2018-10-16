import { ModalPage } from './../pages/ventas/modal.page';
import { VentasPage } from './../pages/ventas/ventas';
import { ArticuloEditPage } from './../pages/articulo-edit/articulo-edit';
import { ArticulosAddPage } from './../pages/articulos-add/articulos-add';
import { ArticulosPage } from './../pages/articulos/articulos';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from  'angularfire2';
import { AngularFirestoreModule }from 'angularfire2/firestore'
import { UserDataService } from '../services/userData.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { ArticulosProvider } from '../providers/articulos/articulos';


export const firebaseConfig = {
  apiKey: "AIzaSyAIWHfuEz8cazwJvZPkeKOsXeLLwJps82E",
    authDomain: "punto-venta-e94ad.firebaseapp.com",
    databaseURL: "https://punto-venta-e94ad.firebaseio.com",
    projectId: "punto-venta-e94ad",
    storageBucket: "punto-venta-e94ad.appspot.com",
    messagingSenderId: "553716219306"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ArticulosPage,
    ArticulosAddPage,
    ArticuloEditPage,
    VentasPage,
    ModalPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ArticulosPage,
    ArticulosAddPage,
    ArticuloEditPage,
    VentasPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserDataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    ArticulosProvider
  ]
})
export class AppModule {}
