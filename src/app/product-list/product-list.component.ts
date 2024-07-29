import { ProductService } from '../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, RouterLink]
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedCategory = 'all'; 
  categories = ['all', 'smothie', 'juice', 'vegetables', 'tea'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProductsByCategory(this.selectedCategory).subscribe(
      (products) => this.products = products
    );
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.loadProducts();
  }

  formatLabel(label: string): string {
    return label.replace(/([A-Z])/g, ' $1').trim();
  }
}

