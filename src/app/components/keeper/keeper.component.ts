import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'keeper',
    templateUrl: './keeper.component.html',
    styleUrls: ['./keeper.component.css'],
    providers: [UserService]
})
export class KeeperComponent implements OnInit{

    public titulo: string
    public keepers: User[];
    public url;

    constructor(
        private _userService: UserService
    ){
        this.titulo = 'Cuidadores';
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        this.getKeeper();
    }

    getKeeper(){
  
        this._userService.getKeepers().subscribe(
        response => {
            if(!response.users){

            }else{
            this.keepers = response.users;
            }
        },
        error => {
            console.log(<any>error);
        }
        );
      }
}