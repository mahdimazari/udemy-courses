import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
// import { Credentials } from '../models/credentials';
import { Router } from '@angular/router';
// import { AuthService } from '../.s./services/auth.service';
// import { Credentials } from '../../models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // TODO: type form with Credentials type instead any
  loginForm = new FormGroup<any>({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    // name: new FormControl('', [Validators.name]),
  });
  // router: any;

  // DI
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  submit() {
    const formValue: unknown = this.loginForm.value;
    this.authService.postLogin(formValue);
    this.router.navigate(['/cart']);
  }
}
