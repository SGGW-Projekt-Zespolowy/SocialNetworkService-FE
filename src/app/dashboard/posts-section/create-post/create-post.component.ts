import { Component, EventEmitter, Output } from '@angular/core';
import { PostPopUpService } from 'src/app/services/post-pop-up.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  constructor(
    public PostPopUpService: PostPopUpService,
  ) {}
}
