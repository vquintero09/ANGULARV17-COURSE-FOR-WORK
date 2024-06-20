import { group } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';


interface ICartProduct {
	name: string;
	price: number;
	quantity: number;
	total: number;
}

const PRODUCTS: ICartProduct[] = [
	{ name: 'Mens Casual Slim Fit', price: 109.95, quantity: 2, total: 219.9 },
	{ name: "ohn Hardy Women's Legends Naga Gold & Silver Dragon", price: 695, quantity: 1, total: 695 },
	{ name: 'ierced Owl Rose Gold Plated Stainless Steel Double', price: 10.99, quantity: 1, total: 10.99 }
];

@Component({
  selector: 'app-simple-product-detail',
  standalone: true,
  imports: [
		MatTableModule, 
		ReactiveFormsModule, 
		MatInput, 
		MatFormFieldModule, 
		MatInputModule,
		MatIconModule,
		MatButtonModule
	],
  templateUrl: './simple-product-detail.component.html',
  styleUrl: './simple-product-detail.component.scss'
})
export class SimpleProductDetailComponent implements OnInit{
	private readonly _router = inject(Router);
	private readonly _formBuilder = inject(FormBuilder);

	constructor () {
		console.log(this._router.getCurrentNavigation()?.extras.state); //Obetner los valores pasados por url con data state
	}

  displayedColumns: string[] = ['name', 'price', 'quantity', 'total', 'action'];
	// dataSource = PRODUCTS;


	form = this._formBuilder.group({
		total: PRODUCTS.reduce((prev, current) => prev + current.total, 0),
		products: this._formBuilder.array(PRODUCTS.map((item) => this._crateFormGroup(item)))
	});

	dataSource = new MatTableDataSource(this.form.controls.products.controls)

	

	ngOnInit(): void {
		this._calculate_row_total();
	}

	private _crateFormGroup(item: ICartProduct) {
		return this._formBuilder.group({
			name: item.name,
			price: item.price,
			quantity: item.quantity,
			total: item.total
		});
	};

	private _calculate_row_total() {
		this.productsFormArray.controls.forEach(({controls: {quantity, price, total}}) => {
			quantity.valueChanges.subscribe((value) =>{
				const priceValue = price.value!;
				let totalValue = 0;

				if(value) {
					totalValue = priceValue * value
				}

				total.setValue(totalValue)
				
			})
		})
	}

	get productsFormArray() {
		return this.form.controls.products;
	}

	clickDelete(index: number){
		this.productsFormArray.removeAt(index);

		this.dataSource.data = this.productsFormArray.controls;
	}
}
