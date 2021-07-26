import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [],
    providers: [UserService]
})
export class LoginComponent implements OnInit{

    public titulo: string;
    public user: User;
    public identity: any;
    public token: any;
    public status: any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ){
        this.titulo = 'Inicio de Sesion';
        this.user = new User('', '', '', '', '', 'ROLE_USER', '');
    }

    ngOnInit(){
        console.log(this._userService.getIdentity());
        console.log(this._userService.getToken());
    }

    onSubmit(){
        //logear el usuario y conseguir el objeto
        this._userService.signup(this.user).subscribe(
            response => {
                this.identity = response.user;
                //comprobar si esta bien el objeto
                
                if(!this.identity || !this.identity._id){
                    alert('El usuario no se ha logueado correctamente');
                } else {
                    this.identity.password = '';
                    //mostrar identity

                    localStorage.setItem('identity', JSON.stringify(this.identity));


                    //conseguir el token
                    this._userService.signup(this.user, 'true').subscribe(
                        response => {
                            this.token = response.token;
                            //comprobar si esta bien el objeto
                            
                            if(this.token.length <= 0){
                                alert('El Token No Se Ha Generado');
                            } else {
                                localStorage.setItem('token', this.token);
                                this.status = 'success';

                                this._router.navigate(['/']);
                            }
                        },
                        error => {
                            const errorMessage = <any>error;

                            if(errorMessage != null){
                                const body = JSON.parse(error._body);
                                this.status = 'error';
                            }
                        }
                    );
                }
            },
            error => {
                const errorMessage = <any>error;

                if(errorMessage != null){
                    const body = JSON.parse(error._body);
                    this.status = 'error';
                }
            }
        );
    }
}