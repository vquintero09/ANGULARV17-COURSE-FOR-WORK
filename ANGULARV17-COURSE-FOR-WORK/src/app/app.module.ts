import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RoutingModule } from './app.routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { SimpleProductDetailComponent } from './pages/payment-page/simple-product-detail/simple-product-detail.component';

@NgModule({
	declarations: [AppComponent, NotFoundPageComponent],
	imports: [
		HttpClientModule, 
		BrowserModule, 
		BrowserAnimationsModule, 
		HomeComponent,
		RoutingModule,
		MatFormFieldModule,
		MatCardModule,
		MatIcon,
		MatInput,
		MatButton,
		PaymentPageComponent,
		SimpleProductDetailComponent
	],
	bootstrap: [AppComponent],
	providers: [provideAnimationsAsync()]
})
export class AppModule {}