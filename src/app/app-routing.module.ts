import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { UserCrudComponent } from './views/user/user-crud/user-crud.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "user",
    component: UserCrudComponent
  },
  {
    path: "user/create",
    component: UserCreateComponent
  },
  {
    path: "user/update/:id",
    component: UserUpdateComponent
  },
  {
    path: "user/delete/:id",
    component: UserDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
