import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private formData: any = {};

  constructor() {}

  setFormData(data: any): void {
    this.formData = data;
  }

  getFormData(): any {
    return this.formData;
  }

  clearFormData(): void {
    this.formData = {};
  }

  isFormDataEmpty(): boolean {
    return Object.keys(this.formData).length === 0;
  }
}
