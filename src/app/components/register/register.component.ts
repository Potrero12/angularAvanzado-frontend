import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [UserService]
})
export class RegisterComponent implements OnInit{

    public titulo: string;
    public user: User;
    public status: any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ){
        this.titulo = 'Registro';
        this.user = new User('', '', '', '', '', 'ROLE_USER', '');
    }

    onSubmit(registerForm){
        this._userService.register(this.user).subscribe(
            response => {
                if(response.user && response.user._id){
                    this.status = 'success'
                    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
                    registerForm.reset();
                } else { 
                    this.status = 'error';
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    ngOnInit(){

    }
}