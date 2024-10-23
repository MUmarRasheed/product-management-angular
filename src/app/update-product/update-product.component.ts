// src/app/update-product/update-product.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: any = { 
    name: '', 
    price: null, 
    units: null, 
    description: '' 
  };
  successMessage: string | null = null; // Property to hold success message

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Use 'id' to match your route
    if (id) {
      this.productService.getProductById(id).subscribe(product => {
        this.product = product; // Assuming product is returned correctly
      }, error => {
        console.error('Error fetching product:', error);
      });
    } else {
      console.error('No ID found');
    }
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.successMessage = 'Product updated successfully!'; // Set success message
      setTimeout(() => {
        this.successMessage = null; // Clear message after 3 seconds
        this.router.navigate(['/products']); // Navigate after clearing message
      }, 3000);
    });
  }
}
