import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent{

  @Output() close = new EventEmitter<boolean>();

  titles = ['siema', 'jebany', 'chuju']

  postForm = this.fb.group({
    title: [null, [Validators.required]],
    content: [null, [Validators.required]],
    category: [null, [Validators.required]],
    hashtags: [[], [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
  ) {}

  onSubmit() {
    if(this.postForm.valid) {
      console.log(this.postForm.value)
    }
  }

}
