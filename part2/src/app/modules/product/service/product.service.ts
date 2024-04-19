import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import config from '../../../../config';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private API_URL = `${config.endPoint}products`;

  constructor(private http: HttpClient) { }

  save(product: Product) {
    if(product.id) {
      return this.http.patch<Product>(`${this.API_URL}/${product.id}`, {
        name: product.name,
        price: product.price,
        checked: product.checked
      });
    }
    return this.http.post<Product>(`${this.API_URL}`, {
      id: null,
      name: product.name,
      price: product.price,
      checked: product.checked,
    });
  }

  getAll(page: number, size: number, keyword: string) {
    return this.http.get(`${this.API_URL}?_page=${page}&_limit=${size}&name_like=${keyword}`, {
      observe: 'response'
    });
  }

  get(id: number) {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
  }

  delete(id: number) {
    return this.http.delete<Product>(`${this.API_URL}/${id}`);
  }
  
}
