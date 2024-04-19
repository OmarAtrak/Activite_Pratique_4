import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {

  public productState: any = {
    products: [],
    pageSize: 5,
    currentPage: 1,
    totalPages: 0,
    keyword: '',
    totalProducts: 0,
    status: '',
    errorMessage: '',
  }

  constructor() { }

  public setProductState(state: any): void {
    this.productState = {...this.productState, ...state};
  }
}
