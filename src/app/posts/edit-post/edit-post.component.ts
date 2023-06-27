import { Component, Input } from '@angular/core';
import { take } from 'rxjs';
import { PostEditModel, PostModel } from 'src/app/models/post.model';
import { ContextService } from 'src/app/services/context.service';
import { PostPopUpService } from 'src/app/services/post-pop-up.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {

  @Input() data: PostModel
  postEditModel: PostEditModel;

  constructor(
    public postPopUpService: PostPopUpService,
    private contextService: ContextService,
    private postService: PostService
  ) {}

  ngOnInit() {
    if(this.data) {
      const clone = structuredClone(this.data)
      this.postEditModel = {
        ...clone
      }
    }
  }

  editPost(editedPost: PostEditModel) {
    this.postService.editPost(this.data, editedPost);
    this.postPopUpService.closeEditPostModal();
  }
}
