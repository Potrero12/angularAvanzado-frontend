import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importar nuestro nuevo modulo
import { ModuloEmailModule} from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';

//componentes de la app
import { AnimalComponent } from './components/animals/animal.component';
import { ContactComponent } from './components/contacts/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParqueComponent } from './components/parques/parques.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    ContactComponent,
    HomeComponent,
    KeeperComponent,
    TiendaComponent,
    ParqueComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    routing,
    ModuloEmailModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
