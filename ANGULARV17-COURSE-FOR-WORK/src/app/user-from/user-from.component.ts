import { Component } from '@angular/core';

@Component({
  selector: 'app-user-from',
  standalone: true,
  imports: [],
  templateUrl: './user-from.component.html',
  styleUrl: './user-from.component.scss'
})
export class UserFromComponent {

  inputMessage = 'Ingresa tus nombres';
	disabledButton = true;

  input(event: Event): void {
    const inputEvent = event.currentTarget as HTMLInputElement;
    
    console.log('evento input ...', inputEvent.value);
  }

  clickSaveData(): void{
    console.log('Guardando datos...');
  }
}
