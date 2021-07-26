import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import 'rxjs/Operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class AnimalService{

    public url: string;
    public identity: any;
    public token: any;

    constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
    };

    addAnimal(token, animal):Observable<any>{
        let params = JSON.stringify(animal);

        let header = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('Authorization', token);

        return this._http.post(this.url + 'guardar-animales', params, {headers: header});
    };

	getAnimal(id):Observable<any>{
		return this._http.get(this.url+'animal/'+id);
	};

	getAnimals():Observable<any>{

		return this._http.get(this.url+'animales');
	};

    editAnimal(token, id, animal):Observable<any>{
        let params = JSON.stringify(animal);

        let header = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('Authorization', token);

        return this._http.put(this.url + 'animal/' + id, params, {headers: header});
    };

    deleteAnimal(token, id):Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        return this._http.delete(this.url + 'animal/' + id, {headers: headers});
    };
}