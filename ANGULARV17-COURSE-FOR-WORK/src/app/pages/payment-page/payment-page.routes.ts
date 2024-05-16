import { Routes } from "@angular/router";
import { PaymentPageComponent } from "./payment-page.component";
import { SimpleProductDetailComponent } from "./simple-product-detail/simple-product-detail.component";

export default [
  {
    path: '',
    component: PaymentPageComponent,
    children: [
      { path: 'simple-product-detail', //http:localhost:4200/home/payment/simple-product-detail
        component: SimpleProductDetailComponent
      },
      {
        path: 'full-product-details',
        loadComponent: () => import('./full-product-details/full-product-details.component')
      },
      {
        path: '', //http:localhost:4200/home/payment
        redirectTo: 'simple-product-detail',
        pathMatch: "full"
      }
    ]
  }
] as Routes
  