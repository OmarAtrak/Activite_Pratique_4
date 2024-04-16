import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrl: './index-product.component.css'
})

export class IndexProductComponent implements OnInit {
  public products: Array<any> = [];
  public filterProducts: Array<any> = [];
  public searchKey: string = '';

  constructor() {}

  ngOnInit() {
    this.products = this.filterProducts = [
      {"id": 1, "name": "Computer", "price": 4300},
      {"id": 2, "name": "Printer", "price": 3200},
      {"id": 3, "name": "Smart Phone", "price": 2100},
      {"id": 4, "name": "Mouse", "price": 60},
    ];
  }

  search() {
    if (this.searchKey.trim() === '') {
      this.products = [...this.filterProducts];
    }
    else {
      this.products = this.filterProducts.filter(product =>
        product.name.toLowerCase().includes(this.searchKey.toLowerCase())
      );
    }
  }

  deleteProduct(product: any) {
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
}
