import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostEditModel, PostModel } from 'src/app/models/post.model';
import { PostPopUpService } from 'src/app/services/post-pop-up.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent{

  @Input() data: PostEditModel = {
    title: null,
    category: null,
    content: null,
    tags: [],
    images: []
  };

  @Output() close = new EventEmitter()
  @Output() submitForm = new EventEmitter<PostEditModel>()

  titles = ['siema', 'jebany', 'chuju']

  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      title: [this.data.title, [Validators.required]],
      content: [this.data.content, [Validators.required]],
      category: [this.data.category, [Validators.required]],
      tags: [this.data.tags, [Validators.required]],
      images: [this.data.images, [Validators.required]]
    });
  }

  onSubmit() {
    if(this.postForm.valid) {
      console.log(this.postForm.value)
      this.submitForm.emit((<PostEditModel>this.postForm.value))
    }
  }
}