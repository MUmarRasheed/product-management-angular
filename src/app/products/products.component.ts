// src/app/products/products.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  successMessage: string | null = null; // Property to hold success message

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  deleteProduct(id: string) {
    console.log('Deleting product with ID:', id); // Log the ID
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
      this.successMessage = 'Product deleted successfully!'; // Set success message
      setTimeout(() => {
        this.successMessage = null; // Clear message after 3 seconds
      }, 3000);
    });
  }
}
