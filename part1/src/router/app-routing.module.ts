import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/modules/application/view/home/home.component';
import { IndexProductComponent } from '../app/modules/product/index-product/index-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: IndexProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
