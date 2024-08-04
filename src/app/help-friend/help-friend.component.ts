import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

export interface Product {
  name: string;
  productType: string;
  location: string;
  title: string;
}

const ELEMENT_DATA: Product[] = [
  {name: 'Product 1', productType: 'Type A', location: 'Location 1', title: 'Title 1'},
  {name: 'Product 2', productType: 'Type B', location: 'Location 2', title: 'Title 2'},
  {name: 'Product 3', productType: 'Type C', location: 'Location 3', title: 'Title 3'}
];

@Component({
  selector: 'app-help-friend',
  templateUrl: './help-friend.component.html',
  styleUrls: ['./help-friend.component.scss']
})
export class HelpFriendComponent implements OnInit {
  displayedColumns: string[] = ['name', 'productType', 'location', 'title', 'actions'];
  products = ELEMENT_DATA;

  constructor(private productService: ProductService,  private router: Router) {}

  ngOnInit(): void {
    if(!this.productService.isFormDataEmpty()) {
      const new_element: Product = this.productService.getFormData();
      new_element.name = "ADMIN"
      ELEMENT_DATA.unshift(new_element);
    }
  }

  onYes(element: Product): void {
    console.log('Yes clicked', element);
    this.router.navigate(['/reply'], { state: { element } });  }

  onNo(element: Product): void {
    console.log('No clicked', element);
    this.products = this.products.filter(product => product.name !== element.name);

  }
}
