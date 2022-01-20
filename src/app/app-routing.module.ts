import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { UserCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product/product-crud/product-crud.component';
import { UserDeleteComponent } from './components/product/user-delete/user-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: UserCreateComponent
  },
  {
    path: "user/update/:id",
    component: ProductUpdateComponent
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
