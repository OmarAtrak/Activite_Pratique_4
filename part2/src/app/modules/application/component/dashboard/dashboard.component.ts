import { Component } from '@angular/core';
import { ProductStateService } from '../../../product/service/product-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  
  constructor(public productStateService: ProductStateService) {}
  
  totalCheckedProducts() {
    const checkedProducts = this.productStateService.productState.products.filter((p: any) => p.checked == true).length;
    return checkedProducts;
  }
}
