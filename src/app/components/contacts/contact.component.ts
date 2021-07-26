import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.html']
})
export class ContactComponent implements OnInit{

    public titulo: string;
    public emailContacto: any;

    constructor(){
        this.titulo = 'Contact Component'
    }

    ngOnInit(){
        
    }

    guardarEmail(){
        localStorage.setItem('emailContacto' , this.emailContacto);
    }
}