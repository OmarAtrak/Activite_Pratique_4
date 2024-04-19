import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})

export class EditProductComponent implements OnInit {
  public productId!: number;
  public product = new Product();
  public productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      price: this.formBuilder.control(null, Validators.required),
      checked: this.formBuilder.control(null),
    });
  }

  ngOnInit(): void {
    // get product by id and set data in form
    this.productId = Number(this.activatedRoute.snapshot.params['id']);
    this.getProduct();
  }
  
  getProduct() {
    this.productService.get(this.productId)
    .subscribe({
      next: data => {
        // set data in product
        this.product.id = data.id;
        this.product.name = data.name;
        this.product.price = data.price;
        this.product.checked = data.checked;
        
        // set data in form
        this.initData();
      },
      error: err => {
        console.error(err);
      }
    });
  }

  initData() {
    // set data in input of form
    this.productForm.get('name')?.setValue(this.product.name);
    this.productForm.get('price')?.setValue(this.product.price);
    this.productForm.get('checked')?.setValue(this.product.checked);
  }

  submit() {
    if(this.productForm.valid) {
      const values = this.productForm.value;
      const product = new Product();
      product.id = this.product.id;
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
