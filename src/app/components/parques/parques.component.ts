import { 
    Component, OnInit, Input, Output, EventEmitter, 
    OnChanges, SimpleChanges, DoCheck, OnDestroy
} from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.html']
})
export class ParqueComponent implements DoCheck, OnInit, OnChanges, OnDestroy{


    @Input() public nombre: string;
    @Input('metros_cuadrados') public metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter();

    constructor(){
        this.nombre = 'Paque Caballo';
        this.metros = 400;
        this.vegetacion = 'Alta';
        this.abierto = false;
    }

    emitirEvento(){
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        });
    }

    ngOnInit(){
        console.log('Metodo OnInitLanzado');
    }

    ngOnDestroy(){
        console.log('Se va a eliminar el componente');
    }

    ngDoCheck(){
        console.log('DoCheck Lanzado');
    }

    ngOnChanges(changes: SimpleChanges){
        console.log(changes);
        console.log('Existen cambios en el formulario');
    }

}