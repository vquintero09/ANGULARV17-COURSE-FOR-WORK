import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LikeComponent } from './like/like.component';
import { UserFromComponent } from './user-from/user-from.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LikeComponent, UserFromComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ANGULARV17-COURSE-FOR-WORK';
}
