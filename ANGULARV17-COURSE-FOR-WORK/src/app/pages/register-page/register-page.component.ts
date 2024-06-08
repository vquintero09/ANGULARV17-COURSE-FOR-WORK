import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { PasswordStateMatcher, crossPasswordMatchingValidatior, customPasswordValidators } from './register-custom-validatos';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [MatCardModule, MatInput, MatFormFieldModule, MatIcon, MatButton, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export default class RegisterPageComponent {
  private readonly _formBuilder = inject(FormBuilder);

  passwordStateMatcher = new PasswordStateMatcher();

  // formGroup = new FormGroup({
	// 	names: new FormControl('', { validators: Validators.required, nonNullable: true }),
	// 	lastName: new FormControl('', { validators: Validators.required, nonNullable: true }),
	// 	email: new FormControl('', { validators: [Validators.required, Validators.email], nonNullable: true }),
	// 	password: new FormControl('', { validators: Validators.required, nonNullable: true }),
	// 	confirmPassword: new FormControl('', { validators: Validators.required, nonNullable: true })
	// });

  formGroup = this._formBuilder.group(
		{
			names: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [customPasswordValidators ,Validators.required]],
			confirmPassword: ['', Validators.required]
		},
    {
      validators: crossPasswordMatchingValidatior
    }
	);

  clickRegister(): void {
		// Acceder al valor de un control
		const namesOld = this.formGroup.get('names')?.value;
		const namesNew = this.formGroup.controls.names.value;
		console.log(namesNew);

		//#region Estados de validacion
		// Acceder al estado de validación de un control
		const nameIsValid = this.formGroup.controls.names.valid;
		console.log(nameIsValid);

		// Acceder al estado de validación de todo el formulario
		const formGroupIsValid = this.formGroup.valid;
		console.log(formGroupIsValid);
		//#endregion

		//#region Estados de interacción
		// Acceder al estado de interacción de un control
		const nameIsDirty = this.formGroup.controls.names.dirty;
		console.log(nameIsDirty);

		// Acceder al estado de validación de todo el formulario
		const formGroupIsDirty = this.formGroup.dirty;
		console.log(formGroupIsDirty);
		//#endregion

		//#region ERRORS
		// Acceder a los errores de un control
		const nameErrors = this.formGroup.controls.names.errors;
		console.log(nameErrors);

		// Acceder al estado de validación de todo el formulario
		const formGroupErrors = this.formGroup.errors;
		console.log(formGroupErrors);

		// verificar si un control incumplió una validacion

		console.log(this.formGroup.controls.names.hasError('required'));

    console.log(this.formGroup.controls.password.errors);
    console.log(this.formGroup.value);
    

		//#endregion

		if (this.formGroup.valid) {
			const user = this.formGroup.getRawValue();
		}
	}

  //#region getter ans setters

  get namesField(): FormControl {
    return this.formGroup.controls.names;
  }

  get lastNameField(): FormControl {
    return this.formGroup.controls.lastName;
  }

  get emailField(): FormControl {
    return this.formGroup.controls.email;
  }

  get passwordField(): FormControl {
    return this.formGroup.controls.password;
  }

  get confirmPasswordField(): FormControl {
    return this.formGroup.controls.confirmPassword;
  }
}
