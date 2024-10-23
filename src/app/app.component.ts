// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <h1>Product Management</h1>
      <nav>
        <a routerLink="/products" class="nav-link">Products</a>
        <a routerLink="/add-product" class="nav-link">Add Product</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']  // Link to the CSS file
})
export class AppComponent {}
