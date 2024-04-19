import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/modules/application/view/home/home.component';
import { IndexProductComponent } from '../app/modules/product/view/index-product/index-product.component';
import { AddProductComponent } from '../app/modules/product/view/add-product/add-product.component';
import { EditProductComponent } from '../app/modules/product/view/edit-product/edit-product.component';
import { LoginComponent } from '../app/modules/authentification/view/login/login.component';
import { AdminTemplateComponent } from '../app/modules/application/component/admin-template/admin-template.component';
import { AuthenticationGuard } from '../app/modules/authentification/guards/authentication.guard';
import { AuthorizationGuard } from '../app/modules/authentification/guards/authorization.guard';


enum EnumRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  // admin
  {
    path: 'admin',
    component: AdminTemplateComponent,
    canActivate: [
      AuthenticationGuard
    ],
    data: {
      roles: [EnumRole.ADMIN, EnumRole.USER]
    },
    children: [
      { path: 'home', component: HomeComponent },
      /// products
      {
        path: 'products',
        children: [
          { path: '', component: IndexProductComponent },
          { path: 'add', component: AddProductComponent },
          { path: ':id/edit', component: EditProductComponent, canActivate: [AuthenticationGuard, AuthorizationGuard], data: { roles: [EnumRole.ADMIN] } },
        ]
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
