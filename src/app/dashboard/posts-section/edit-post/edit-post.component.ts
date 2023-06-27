import { Component, Input } from '@angular/core';
import { PostEditModel, PostModel } from 'src/app/models/post.model';
import { PostPopUpService } from 'src/app/services/post-pop-up.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {

  @Input() data: PostModel
  postEditModel: PostEditModel;

  constructor(
    public PostPopUpService: PostPopUpService,
  ) {}

  ngOnInit() {
    if(this.data) {
      this.postEditModel = {
        title: this.data.title,
        category: this.data.category,
        content: this.data.content,
        tags: this.data.tags,
        images: [this.data.image]
      }
    }
  }
}
