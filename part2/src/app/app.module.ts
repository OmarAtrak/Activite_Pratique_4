import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../router/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './modules/application/component/nav-bar/nav-bar.component';
import { HomeComponent } from './modules/application/view/home/home.component';
import { IndexProductComponent } from './modules/product/view/index-product/index-product.component';
import { AddProductComponent } from './modules/product/view/add-product/add-product.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './modules/product/view/edit-product/edit-product.component';
import { DashboardComponent } from './modules/application/component/dashboard/dashboard.component';
import { ErrorComponent } from './modules/application/component/error/error.component';
import { appHttpInterceptor } from './modules/application/service/app-http.interceptor';
import { LoginComponent } from './modules/authentification/view/login/login.component';
import { AdminTemplateComponent } from './modules/application/component/admin-template/admin-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    IndexProductComponent,
    AddProductComponent,
    EditProductComponent,
    DashboardComponent,
    ErrorComponent,
    LoginComponent,
    AdminTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: appHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }