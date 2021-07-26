import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    public titulo: string;

    constructor(){
        this.titulo = 'Bienvenidos Al Zoologico';
    }

    ngOnInit(){

    }

}