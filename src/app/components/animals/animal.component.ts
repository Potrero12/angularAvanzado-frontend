import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'animal',
    templateUrl: './animal.component.html',
    styleUrls: ['./animal.component.css'],
    providers: [AnimalService]
})
export class AnimalComponent implements OnInit {
    public titulo: string;
    public animals: Animal[];
    public url;

    constructor(
        private _animalService: AnimalService
    ){
        this.titulo = 'Animal Component';
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        this.getAnimals();
    }

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
}