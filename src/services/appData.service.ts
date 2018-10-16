import {Injectable} from '@angular/core'
/*Servicio para el manejo de datos del usuariario de forma global  */
@Injectable()
export class AppDataService{
    //public url:string = "http://localhost/estimacionesv2/public/api";//test en area local
    public host:string = 'http://apidtrez.duckdns.org/';//host name
    public url:string = 'http://apidtrez.duckdns.org/api';//test en  servidor de prueba
    //servidor: http://api.dtrez.com.mx/api
    //public url:string = 'http://api.dtrez.com.mx/api';//servidor fijo (desarrollo)
    public nivel:number = 1;
    constructor(){}
}