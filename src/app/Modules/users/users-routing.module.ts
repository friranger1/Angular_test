import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from '../../Components/user-edit/user-edit.component';
import { UserListComponent } from '../../Components/user-list/user-list.component';

const routes: Routes = [
  {path: 'userlist', component: UserListComponent},
  {path: 'userEdit/:id', component: UserEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
