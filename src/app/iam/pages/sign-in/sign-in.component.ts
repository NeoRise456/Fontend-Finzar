import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  private _formBuilder = inject(FormBuilder);
  private _router = inject(Router)

  signInFormGroup = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  signIn() {
    // Implement sign in
  }

  redirectSignIn() {
    this._router.navigate(['/sign-up']);
  }
}
