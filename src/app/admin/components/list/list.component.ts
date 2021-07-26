import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../../models/animal';
import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService, UserService]
})
export class ListComponent implements OnInit {

    public titulo: string;
    public numbers = new Array(10);
    public animals: Animal[];
    public token;
    public busqueda;

    constructor(
      private _animalService: AnimalService,
      private _userService: UserService,
      private _route: ActivatedRoute,
      private _router: Router
    ){
      this.titulo = 'Listado De Animales';
      this.token = this._userService.getToken();
    }

    ngOnInit(){
        this.getAnimals();
    };

    getAnimals(){
      this._animalService.getAnimals().subscribe(
        response => {
            if(!response.animals){

            } else {
              this.animals = response.animals;
            }
        },
        error => {
          console.log(<any>error);
        }
      );
    }

    deleteAnimal(id){
      $('#myModal-'+id).modal('hide');
      this._animalService.deleteAnimal(this.token, id).subscribe(
        response => {
          if(!response.animal){
            console.log('Error');
          } 
          this.getAnimals();
        },
        error => {
          alert('Error en el Servidor');
        }
      );
    }

}