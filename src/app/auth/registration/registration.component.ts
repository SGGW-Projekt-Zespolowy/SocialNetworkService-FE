import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  titles = ['Doktor', 'Student', 'rezydent'];

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
         // TODo: add custom validator to check if password is the same
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      title: new FormControl(null, [
        Validators.required
      ])
    });
  }

  onSubmitRegistrationForm() {
    if(this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }
}
