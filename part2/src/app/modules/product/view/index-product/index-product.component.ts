import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { ProductStateService } from '../../service/product-state.service';
import { AuthStateService } from '../../../authentification/service/auth-state.service';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrl: './index-product.component.css'
})

export class IndexProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    public productStateService: ProductStateService,
    public authStateService: AuthStateService
  ) {}

  /***************************************  pagination  ***************************************/
  public pages = { left: [3, 2, 1], right: [1, 2, 3] };

  setPage(value: number) {
    this.productStateService.setProductState({currentPage: value});
    this.loadAllProduct();
  }

  loadAllProduct() {
    // this.productStateService.setProductState({
    //   status: 'LOADING',
    // });

    const currentPage = this.productStateService.productState.currentPage;
    const pageSize = this.productStateService.productState.pageSize;
    const keyword = this.productStateService.productState.keyword;
    this.productService.getAll(currentPage, pageSize, keyword)
    .subscribe({
      next: (response) => {
        const products = response.body as Array<Product>;
        const totalProducts = parseInt(response.headers.get('x-total-count')!);
        let totalPages = Math.floor(totalProducts / this.productStateService.productState.pageSize);
        if(totalProducts % this.productStateService.productState.pageSize != 0) {
          ++totalPages;
        }

        this.productStateService.setProductState({
          products: products,
          totalProducts: totalProducts,
          totalPages: totalPages,
          status: 'LOADED',
        });
      },
      error: err => {
        console.error(err);
        this.productStateService.setProductState({
          status: 'ERROR',
          errorMessage: err,
        });
      }
    });
  }

  changePageSize(event: any) {
    const pageSize = event.target.value;
    if(pageSize) {
      this.productStateService.setProductState({
        pageSize: Number(pageSize)
      });
      this.setPage(1);
    }
  }
  /************************************** end Pagination **************************************/

  ngOnInit() {
    this.loadAllProduct();
  }

  deleteProduct(product: Product) {
    if(confirm('Are You Sure?')) {
      this.productService.delete(product.id)
      .subscribe({
        next: () => {
          this.loadAllProduct();
        },
        error: err => {
          console.error(err);
        }
      });

      if(this.productStateService.productState.products.length == 1)
        this.setPage(--this.productStateService.productState.currentPage)

      this.loadAllProduct();
    }
  }

  handleCheckProduct(product: Product) {
    product.checked = !product.checked;
    this.productService.save(product)
    .subscribe({
      next: () => {
        this.loadAllProduct();
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
