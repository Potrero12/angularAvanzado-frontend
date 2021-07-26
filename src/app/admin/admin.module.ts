import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';


//componentes
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';

//guard
import { UserService } from '../services/user.service';
import { AdminGuard } from '../services/admin.guard';

//pipe
import { searchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    searchPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    MainComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  providers: [
    UserService,
    AdminGuard
  ],
})
export class AdminModule { }