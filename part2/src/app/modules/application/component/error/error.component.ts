import { Component } from '@angular/core';
import { ProductStateService } from '../../../product/service/product-state.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})

export class ErrorComponent {
  
  constructor(public productStateService: ProductStateService) {}

}
