import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, Validators, ReactiveFormsModule, FormGroup} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ MatButtonModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  private _formBuilder = inject(FormBuilder);
  private _router = inject(Router)

  userFormGroup = this._formBuilder.group({
    username: ['', Validators.required]
  });
  passwordFormGroup = this._formBuilder.group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {validator: this.passwordMatchValidator});

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value ? null : {mismatch: true};
  }

  createAccount() {
    // Implement sign up user creation
  }

  redirectSignIn() {
    this._router.navigate(['/sign-in']);
  }

  // change the html site to not make sign-in redundant idk dont forget to change it
}
