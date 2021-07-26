import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../../models/animal';
import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  providers: [AnimalService, UserService, UploadService]
})
export class AddComponent implements OnInit {

    public titulo: string;
    public url: string;
    public animal: Animal;
    public token;
    public identity;
    public status;

    constructor(
      private _animalService: AnimalService,
      private _userService: UserService,
      private _uploadService: UploadService,
      private _route: ActivatedRoute,
      private _router: Router
    ){
      this.titulo = 'Añadir';
      this.url = GLOBAL.url;
      this.animal = new Animal('','', '', 2021, '', '');
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
    }

    ngOnInit(){
      
    }

    onSubmit(){
      this._animalService.addAnimal(this.token, this.animal).subscribe(
        response => {
          if(!response.animal){
            response.status = 'error';
          } else {
            this.status = 'success';
            this.animal = response.animal;

            //subir la imagen
            if(!this.filesToUpload){
              //redirecion
                this._router.navigate(['/admin-panel/listado']);
            } else {
              //subida de imagen
              this._uploadService.makeFileRequest(this.url+'upload-image-animal/'+this.animal._id, [], this.filesToUpload, this.token, 'image')
                                 .then((result: any) => {
                                      this.animal.image = result.image; 
                                      this._router.navigate(['/admin-panel/listado']);
                                  });
            }
          }
        },
        error => {
          let errorMessage = <any>error;

          if(errorMessage != null){
            this.status = 'error';
          }
        }
      );
    }

    
    public filesToUpload: Array<File>;
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;

    }

}