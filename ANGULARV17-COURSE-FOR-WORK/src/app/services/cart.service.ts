import { Injectable } from '@angular/core';
import { IProduct, IProductDetail } from './models/cart.inteface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _productDetail: IProductDetail[] = [];
  private _count = 0;

  cartObservable$ = new Subject<number>;
  productObservable$ = new Subject<IProductDetail[]>

  addToCart(product: IProduct){
    const idProduct = product.id;
    const index = this._productDetail.findIndex(({product}) => product.id === idProduct);

    if(index === -1) {
      this._productDetail.push({product: product, count: 1, total: product.price});
      this._updateCount();
      this._getProduct();
    }else {
      this._updateProduct(index);
    }
  }

  private _updateProduct(index: number) {
    const productDetail = this._productDetail[index];
    productDetail.count = this._count++;
    productDetail.total = productDetail.count * productDetail.product.price;

    this._updateCount();
  }

  private _getProduct() {
    this.productObservable$.next(this._productDetail)
  }

  private _updateCount(){
    this._count = this._count + 1;
    this.cartObservable$.next(this._count)
  }

  
}
