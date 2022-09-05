import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserEditComponent } from './Components/user-edit/user-edit.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';



import { NoopAnimationsModule } from '@angular/platform-browser/animations';



import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './Components/menu/menu.component';


const routerArr: Routes = [
  {path: 'userEdit/:id', component: UserEditComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    UserEditComponent,
    NotFoundComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(routerArr),
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
