import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-email',
    templateUrl: './main-email.component.html',
    styleUrls: []
})
export class MainEmailComponent implements OnInit{

    public titulo: string;

    constructor(){
        this.titulo = 'Mostrar Email';
    }

    ngOnInit(){
        
    }
}