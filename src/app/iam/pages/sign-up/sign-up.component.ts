import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, Validators, ReactiveFormsModule, FormGroup} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {AuthenticationService} from "../../services/authentication.service";
import {SignUpRequest} from "../../model/sign-up.request";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatButtonModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent extends BaseFormComponent implements OnInit {

  userFormGroup!: FormGroup;
  passwordFormGroup!: FormGroup
  submitted = false;

  constructor(private builder: FormBuilder, private authenticationService: AuthenticationService) {
    super();
  }

  ngOnInit(): void {
      this.userFormGroup = this.builder.group({
        username: ['', Validators.required]
      });
      this.passwordFormGroup = this.builder.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value ? null : {mismatch: true};
  }

  onSubmit() {
    if (this.userFormGroup.invalid || this.passwordFormGroup.invalid) return;
    let username = this.userFormGroup.value.username;
    let password = this.passwordFormGroup.value.password;
    const signUpRequest = new SignUpRequest(username, password);
    this.authenticationService.signUp(signUpRequest);
    this.submitted = true;
  }
}
