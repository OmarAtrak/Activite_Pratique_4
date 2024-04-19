import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../router/app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './modules/application/component/nav-bar/nav-bar.component';
import { IndexProductComponent } from './modules/product/index-product/index-product.component';
import { HomeComponent } from './modules/application/view/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IndexProductComponent,
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
