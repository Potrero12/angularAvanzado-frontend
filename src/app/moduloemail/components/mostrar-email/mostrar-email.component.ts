import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mostrar-email',
    templateUrl: './mostrar-email.component.html',
    styleUrls: []
})
export class MostrarEmailComponent implements OnInit{

    public titulo: any;
    public emailContacto: any;

    ngOnInit(){
        this.emailContacto = localStorage.getItem('emailContacto');
      }
  
    ngDoCheck(){
      this.emailContacto = localStorage.getItem('emailContacto');
      console.log('docheck desde el app component');
    }

    borrarEmail(){
      localStorage.removeItem('emailContacto');
      localStorage.clear();
      this.emailContacto = null;
    }
}