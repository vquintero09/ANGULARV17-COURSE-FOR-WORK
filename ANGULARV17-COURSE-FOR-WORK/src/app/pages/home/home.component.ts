import { Component, OnInit, inject } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductsApiService } from '../../services/products-api.service';
import { ProductComponent } from './product/product.component';
import { IApiResponseProduct } from '../../services/models/product.api.interface';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { AsyncPipe } from '@angular/common';
import { IProduct, IProductDetail } from '../../services/models/cart.inteface';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbar, MatIcon, MatBadgeModule, MatButtonModule, MatSidenavModule, ProductComponent, AsyncPipe, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  readonly ProductsApiService = inject(ProductsApiService);
  private readonly _cartService = inject(CartService)

  count = 0;

  products$!: Observable<IApiResponseProduct[]>;

  productCart!: IProductDetail[];

  

  ngOnInit(): void {
    //Forma manual de subscribirse a un observable
    // this._ProductsApiService.getProducts().subscribe((data) => this.products = data);

    // Forma automatica de susbscribirse y desuscribirse a un observable usando el pipe AsyncPipe
    this.products$ = this.ProductsApiService.getProducts();

    this._cartService.cartObservable$.subscribe({
      next: (number) => this.count = number
    })

    this._cartService.productObservable$.subscribe({
      next: (product) => this.productCart = product
    })
  }

  
  
}
