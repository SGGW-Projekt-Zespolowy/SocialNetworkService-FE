import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomAuthValidators } from '../custom-auth-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  titles = ['Doktor', 'Student', 'Rezydent'];
  registrationForm: FormGroup 

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      surname: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(7)
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required, 
        Validators.minLength(7),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      title: new FormControl(null, [
        Validators.required
      ])
    }, {
      validators: [CustomAuthValidators.MatchValidator('password', 'confirmPassword')]
    });
  }

  onSubmitRegistrationForm() {
    CustomAuthValidators.validateAllFormFields(this.registrationForm);

    if(this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }
}
