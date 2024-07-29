import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Product {
  category: string;
  image: string;
  hoverImage: string | null;
  title: string;
  link: string;
  price: string;
  discount: string | null;
  labels: string[];
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('./assets/products.json'); 
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>('./assets/products.json').pipe(
      map(products => products.filter(p => p.category === category))
    );
  }
}
