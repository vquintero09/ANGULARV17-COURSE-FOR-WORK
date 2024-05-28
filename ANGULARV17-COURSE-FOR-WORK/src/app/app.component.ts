import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerModule } from './container/container.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContainerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ANGULARV17-COURSE-FOR-WORK';
}
