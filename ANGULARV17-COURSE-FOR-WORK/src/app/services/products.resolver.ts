// import { Injectable, inject } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, ResolveFn} from '@angular/router';
// import { Observable} from 'rxjs';
// import { IApiResponseProduct } from './models/product.api.interface';
// import { ProductsApiService } from './products-api.service';



// @Injectable({
// 	providedIn: 'root'
// })
// export class ProductsResolverService implements Resolve<IApiResponseProduct[]> {
//   private readonly _productsApiService = inject(ProductsApiService);

//   resolve(route: ActivatedRouteSnapshot): Observable<IApiResponseProduct[]> {
//     console.log('Productos desde el resolver...', route);
// 		return this._productsApiService.getProducts();
//   }
// }

import { inject } from "@angular/core"
import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router"
import { IApiResponseProduct } from "./models/product.api.interface"
import { ProductsApiService } from "./products-api.service"

export const ProductsResolverServiceFn: ResolveFn<IApiResponseProduct[]> = (route: ActivatedRouteSnapshot) => {
  const _productsApiService = inject(ProductsApiService); //Ahora es pocible hacer inyección de dependencia en una función

  console.log('Productos desde el resolver...', route);
  
  return _productsApiService.getProducts();
}