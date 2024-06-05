import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductsResolverServiceFn } from './services/products.resolver';


export default [
  {path: 'home', component: HomeComponent},
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login-page/login-page.module').then((m) => m.LoginPageModule)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register-page/register-page.component')
  },
  {
    path: 'payment/:user',
    data: { title: "pagos"},
    resolve: {ProductsResolverServiceFn},
    loadChildren: () => import('./pages/payment-page/payment-page.routes')
  },
  {path: '', redirectTo: '/home', pathMatch: "full"},
  { path: 'login', redirectTo: '/login', pathMatch: "prefix"},
  { path: '**', component: NotFoundPageComponent}
  
] as Routes
