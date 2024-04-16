import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../router/app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './modules/application/component/nav-bar/nav-bar.component';
import { AddProductComponent } from './modules/product/add-product/add-product.component';
import { IndexProductComponent } from './modules/product/index-product/index-product.component';
import { EditProductComponent } from './modules/product/edit-product/edit-product.component';
import { DetailsProductComponent } from './modules/product/details-product/details-product.component';
import { HomeComponent } from './modules/application/view/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddProductComponent,
    IndexProductComponent,
    EditProductComponent,
    DetailsProductComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
