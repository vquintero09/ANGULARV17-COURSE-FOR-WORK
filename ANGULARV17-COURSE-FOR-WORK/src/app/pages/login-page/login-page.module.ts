import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { LoginPageComponent } from './login-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: '', component: LoginPageComponent}]

@NgModule({
  declarations: [LoginPageComponent],
  imports: [RouterModule.forChild(routes),MatCardModule, MatFormFieldModule, MatIcon, MatInput, MatButton],
  exports: [LoginPageComponent],
})
export class LoginPageModule { }
