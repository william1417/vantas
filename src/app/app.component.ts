import { UserDataService } from './../services/userData.service';
import { InventarioPage } from './../pages/inventario/inventario';
import { ArticulosPage } from './../pages/articulos/articulos';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any,icon:any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public events: Events,public DataUser:UserDataService) {
    
    this.initializeApp()
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage ,icon:'home'}
    ];

    events.subscribe('user:login', () => {
      this.loggedIn();
    });
  }
  loggedIn() {
    //alert("logged in");
    this.pages = [
      { title: 'Home', component: HomePage ,icon:'home'},
      { title: 'Articulos', component: ArticulosPage,icon:'home'},
      { title: 'Inventaio', component: InventarioPage,icon:'home'},
      { title: 'Salir', component: LoginPage,icon:'log-out'},
       // { title: 'Contacto2', component: ListPage }
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title == 'Salir'){
      this.DataUser.login=false;
      this.pages = [
        { title: 'Inicio', component: HomePage,icon:'home' },
        //{ title: 'Contacto', component: ListPage }
        
      ];

    }
    this.nav.setRoot(page.component);
  }
}
