import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  titles = ['siema', 'jebany', 'chuju']

  loginForm: FormGroup;

  onSubmit() {

  }
}
