import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../../models/animal';
import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';

@Component({
  selector: 'admin-edit',
  templateUrl: '../add/add.component.html',
  providers: [AnimalService, UserService, UploadService]
})
export class EditComponent implements OnInit {

    public titulo: string;
    public url: string;
    public animal: Animal;
    public token;
    public identity;
    public status;
    public is_edit;

    constructor(
      private _animalService: AnimalService,
      private _userService: UserService,
      private _uploadService: UploadService,
      private _route: ActivatedRoute,
      private _router: Router
    ){
      this.is_edit = true;
      this.titulo = 'Editar';
      this.url = GLOBAL.url;
      this.animal = new Animal('','', '', 2021, '', '');
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
    }

    ngOnInit(){
      this.getAnimal();
    }

    getAnimal(){
      this._route.params.forEach((params: Params) => {
        let id = params['id'];

        this._animalService.getAnimal(id).subscribe(
          response => {
            if(!response.animal){
              this._router.navigate(['/home']);
            }else{
              this.animal = response.animal;
            }
          },
          error => {
            console.log(<any>error);
            this._router.navigate(['/home']);
          }
        );

      });
    };

    onSubmit(){
      const id = this.animal._id;
      this._animalService.editAnimal(this.token, id, this.animal).subscribe(
        response => {
          if(!response.animal){
            response.status = 'error';
          } else {
            this.status = 'success';
            this.animal = response.animal;

            //subir la imagen
            if(!this.filesToUpload){
              //redirecion
                this._router.navigate(['/animal', this.animal._id]);
            } else {
              //subida de imagen
              this._uploadService.makeFileRequest(this.url+'upload-image-animal/'+this.animal._id, [], this.filesToUpload, this.token, 'image')
                                 .then((result: any) => {
                                      this.animal.image = result.image; 
                                      this._router.navigate(['/admin-panel/editar/', this.animal._id]);
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