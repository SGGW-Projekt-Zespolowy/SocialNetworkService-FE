import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomAuthValidators } from '../custom-auth-validators';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(7)
      ]),
    });    
  }

  onSubmitLoginForm() {
    CustomAuthValidators.validateAllFormFields(this.loginForm);
    
    if(this.loginForm.valid) {

      this.authService.login(this.loginForm.value).subscribe(res =>
        this.router.navigate(['dashboard'])
      );
    }
  }
}
