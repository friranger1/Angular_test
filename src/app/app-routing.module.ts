import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';


const routes: Routes = [
{path: '', component: AddUserComponent},
{ path: 'users', loadChildren: () => import('./Modules/users/users.module').then(m => m.UsersModule) },
{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
