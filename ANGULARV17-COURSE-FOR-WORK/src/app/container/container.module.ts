import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NotificationModule } from '../notification/notification.module';



@NgModule({
  declarations: [
    ContainerComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NotificationModule
  ],
  exports: [ContainerComponent]
})
export class ContainerModule { }
