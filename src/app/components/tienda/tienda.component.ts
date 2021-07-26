import { 
    Component, OnInit 
} from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit{

    public titulo: string;
    public nombreDelParque: any;
    public miParque:any;

    constructor(){
        this.titulo = 'Esta es la tienda';
    }

    mostrarNombre(){
        console.log(this.nombreDelParque);
    }

    verDatosParque(event: any){
        console.log(event);
        this.miParque = event;
    }

    ngOnInit(){
        $('#textoJq').hide();
        
        $('#botonJq').click(function(){
            console.log('click desde jquery');
            $('#textoJq').removeClass('hidden').slideToggle();
        });
    }
}