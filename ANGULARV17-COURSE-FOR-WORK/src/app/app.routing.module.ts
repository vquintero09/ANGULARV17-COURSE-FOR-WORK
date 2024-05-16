import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { SimpleProductDetailComponent } from './pages/payment-page/simple-product-detail/simple-product-detail.component';
import { FullProductDetailsComponent } from './pages/payment-page/full-product-details/full-product-details.component';
import { ProductsResolverService } from './services/products.resolver';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { 
    path: 'login', 
    component: LoginPageComponent
  },
  {
    path: 'payment/:user',
    component: PaymentPageComponent,
    data: { title: "pagos"},
    resolve: {ProductsResolverService},
    children: [
      { path: 'simple-product-detail', //http:localhost:4200/home/payment/simple-product-detail
        component: SimpleProductDetailComponent
      },
      {
        path: 'full-product-details',
        component: FullProductDetailsComponent
      },
      {
        path: '', //http:localhost:4200/home/payment
        redirectTo: 'simple-product-detail',
        pathMatch: "full"
      }
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: "full"},
  { path: 'login', redirectTo: '/login', pathMatch: "prefix"},
  { path: '**', component: NotFoundPageComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true})],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class RoutingModule { }
