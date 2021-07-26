import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
    selector: 'guardar-email',
    templateUrl: './guardar-email.component.html',
    styleUrls: []
})
export class GuardarEmailComponent implements OnInit, DoCheck{

    public titulo: string
    public emailContacto:any;

    constructor(){
        this.titulo = 'Guardar Email';
    }

    
    guardarEmail(){
        localStorage.setItem('emailContacto' , this.emailContacto);
        
    }

    ngOnInit(){
        // this.emailContacto = localStorage.getItem('emailContacto');
    }

    ngDoCheck(){
        // this.emailContacto = localStorage.getItem('emailContacto');
    }

    // borrarEmail(){
    //     localStorage.removeItem('emailContacto');
    //     localStorage.clear();
    //     this.emailContacto = null;
    // }
}