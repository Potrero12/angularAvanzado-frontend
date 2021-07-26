import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
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

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'animales', component: AnimalComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'home', component: HomeComponent},
    {path: 'cuidadores', component: KeeperComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'parques', component: ParqueComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'mis-datos', component: UserEditComponent},
    {path: 'animal/:id', component: AnimalDetailComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
