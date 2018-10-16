import {Injectable} from '@angular/core'
/*Servicio para el manejo de datos del usuariario de forma global  */
@Injectable()
export class UserDataService{
    public userStatus:boolean = false;//variable para comprobar estado del usuario
    public userName:string = "Extranger";
    public userID:string = "0";
    public login=false;
    //public userDBpass:string = "no password generated";
    
    constructor(){}
}