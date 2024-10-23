// src/app/add-product/add-product.component.ts
import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = { id: '', name: '', description: '', price: null, units: null }; // Fields for description, price, and units
  successMessage: string | null = null; // Property to hold the success message

  constructor(private productService: ProductService) { }

  addProduct() {
    this.productService.addProduct(this.product).subscribe({
      next: () => {
        this.successMessage = 'Product added successfully!'; // Set success message
        this.product = { id: '', name: '', description: '', price: null, units: null }; // Reset form
      },
      error: (err) => {
        console.error('Error adding product:', err);
        this.successMessage = null; // Clear success message on error
      }
    });
  }
}
