import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-friend-reply',
  templateUrl: './friend-reply.component.html',
  styleUrls: ['./friend-reply.component.scss']
})
export class FriendReplyComponent implements OnInit{
  product: any;
  productForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private productService: ProductService) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras?.state?.['element'];
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: [this.product.name],
      productType: [this.product.productType],
      location: [this.product.location],
      title: [this.product.title],
      message:''
    });
  }

  onSubmit(): void {
    console.log(this.productForm.value);
    this.productService.setFormData(this.productForm)
    console.log(this.productForm);
    this.router.navigate(['/home'])
  }
}
