import { Component } from '@angular/core';
import { PostPopUpService } from 'src/app/services/post-pop-up.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {

  constructor(
    public PostPopUpService: PostPopUpService,
  ) {}
}
