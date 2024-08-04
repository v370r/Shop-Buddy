import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

export interface Product {
  name: string;
  productType: string;
  location: string;
  title: string;
}

@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.scss']
})
export class NeedHelpComponent implements OnInit {

  productForm!: FormGroup;
  productTypes = ['Electronics', 'Clothing', 'Furniture', 'Toys'];


  constructor(private fb: FormBuilder, private router: Router,
    private productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productType: ['', Validators.required],
      location: ['', Validators.required],
      time: ['', Validators.required],
      date: ['', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      body: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      const newProduct: Product = {
        name: this.productForm.value.name,
        productType: this.productForm.value.productType,
        location: this.productForm.value.location,
        title: this.productForm.value.title
      };

      this.productService.setFormData(newProduct);
      this.router.navigate(['/home']);
    } else {
      console.log('Form is invalid');
    }
  }


}
