import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiResponseProduct } from './models/product.api.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class ProductsApiService {
  private readonly URL_PRODUCTS = 'https://fakestoreapi.com/products';
  httpClient = inject(HttpClient);

  constructor() { 
    console.log('ProductsService');
  }

  getProducts(): Observable<IApiResponseProduct[]> {
    return this.httpClient.get<IApiResponseProduct[]>(this.URL_PRODUCTS);
  }
  
}
