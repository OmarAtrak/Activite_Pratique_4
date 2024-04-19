import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { ProductStateService } from '../../product/service/product-state.service';
import { LoadingService } from './loading.service';

@Injectable()
export class appHttpInterceptor implements HttpInterceptor {
  
  constructor(private productStateService: ProductStateService, private loadingService: LoadingService) {}

  intercept(requset: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.showLoadingSpinner();
    // this.productStateService.setProductState({
    //   status: 'LOADING'
    // });

    let req = requset.clone({
      headers: requset.headers.set("Authorization", "Bearer JWT")
    });

    return next.handle(req)
    .pipe(
      finalize(() => {
        // this.productStateService.setProductState({
        //   status: 'LOADED'
        // });
        this.loadingService.hideLoadingSpinner();
      })
    );
  }
}
