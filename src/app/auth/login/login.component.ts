import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null),
    });
  }

  onSubmitLoginForm() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
