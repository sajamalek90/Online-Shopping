import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  products: any[] = [];
  selectedCategory = 'all'; 
  categories = ['all', 'smothie', 'juice', 'vegetables', 'tea'];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
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
