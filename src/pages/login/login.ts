import { LoginPageModule } from './login.module';

import { HomePage } from './../home/home';
import { UserDataService } from './../../services/userData.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { LoginProvider } from './../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  nombre="";
  pin="";
  result;
  aa="";
  
  constructor
  (public navCtrl: NavController, 
    public navParams: NavParams, 
    public events:Events ,
    public asf: AngularFirestore,
    public http:HttpClientModule,
    public userData:UserDataService,
    public loginP:LoginProvider) {
      
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  public validador(){//valida los campos vacios
    if(this.nombre.trim().length != 0 && this.pin.trim().length != 0){
      return false;
    }
    else{
      return true;
    }
  }
   public login(){
   this.navCtrl.setRoot(HomePage);
    if(this.validador()){
      alert('verifica que los datos este llenos');
    }
    else{//realiza la consulta
     
      var resultado =  this.loginP.login(this.nombre,this.pin);
      resultado.subscribe(data => {
        if(data.length > 0){
          this.userData.userStatus = true;
          this.userData.userName = data[0].nombre;
          this.userData.userID = data[0].id;
          this.userData.login = true;
          this.events.publish('user:login');
          this.navCtrl.setRoot(HomePage);
        }
        else{
          alert('Usuario no valido');
        }
      }, error => {
        alert('Error verifica tu conexion a internet');
      });
    }
  }
 
 
  

}
