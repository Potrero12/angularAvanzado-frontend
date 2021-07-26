//imports necesarios para crear un modulo
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { routing, appRoutingProviders } from '../app.routing';

import { AppRoutingModule } from '../app-routing.module';

//componentes de la app
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';

//ngModule para cargar componentes y configuracion de modulos
@NgModule({
  declarations: [
    GuardarEmailComponent,
    MainEmailComponent,
    MostrarEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  exports:[MainEmailComponent]
})
export class ModuloEmailModule { }