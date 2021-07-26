import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import 'rxjs/Operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService{
    public url: string;
    public identity: any;
    public token: any;

    constructor(
        private _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }

    register(user_to_register):Observable<any>{
        let params = JSON.stringify(user_to_register);

        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http.post(this.url+'registro-usuario', params, {headers: headers});
    }

    signup(user_to_login, gettoken = null):Observable<any>{

        //sacar el token
        if(gettoken != null){
            user_to_login.gettoken = gettoken;
        }

        let params = JSON.stringify(user_to_login);

        let headers = new HttpHeaders({'Content-Type' : 'application/json'});

        return this._http.post(this.url+'login-usuario', params, {headers: headers});
    }

    updateUser(user_to_update):Observable<any>{
        let params = JSON.stringify(user_to_update);

        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', this.getToken());

        return this._http.put(this.url+'actualizar-usuario/'+user_to_update._id, params, {headers: headers})
    }

    getKeepers():Observable<any>{

		return this._http.get(this.url+'keepers');
	};

    getIdentity():Observable<any>{
        let identity = JSON.parse(localStorage.getItem('identity'));

        if(identity != "undefined"){
            this.identity = identity;
        } else {
            this.identity = null;
        }
         return this.identity;
    }

    getToken():Observable<any>{
        let token = localStorage.getItem('token');

        if(token != 'undefined'){
            this.token = token;
        } else {
            this.token = null;
        }

        return this.token;
    }
}