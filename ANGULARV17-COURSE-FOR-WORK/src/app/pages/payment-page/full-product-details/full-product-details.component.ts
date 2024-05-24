import { Component, inject } from '@angular/core';
import { DemoService } from '../../../services/demo.service';

@Component({
  selector: 'app-full-product-details',
  standalone: true,
  imports: [],
  templateUrl: './full-product-details.component.html',
  styleUrl: './full-product-details.component.scss',
  providers: [DemoService]
})
export default class FullProductDetailsComponent {
  private readonly _demoService = inject(DemoService)
}
