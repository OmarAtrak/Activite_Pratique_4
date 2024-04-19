import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})

export class AddProductComponent implements OnInit {
  public productForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [1, Validators.required],
      checked: true,
    });
  }

  submit() {
    if(this.productForm.valid) {
      const values = this.productForm.value;
      const product = new Product();
      product.name = values.name;
      product.price = values.price;
      product.checked = values.checked;

      this.productService.save(product)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/admin/products');
        },
        error: err => {
          console.error(err);
        }
      });
    }
  }

}
