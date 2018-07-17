import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Service
import { ProductService } from '../../../services/product.service';
import { ToastrService } from 'ngx-toastr';

// Product class
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm) {
    let message: string = '';

    if(productForm.value.$key == null) {
      this.productService.insertProduct(productForm.value);
      message = 'Libro creado';
    }
    else {
      this.productService.updateProduct(productForm.value);
      message = 'Libro actualizado';
    }
    this.resetForm(productForm);
    this.toastr.success(message, 'Success');
  }

  resetForm(productForm?: NgForm) {
    if(productForm != null) {
      productForm.reset();
      this.productService.selectedProduct = new Product();
    }
  }
}
