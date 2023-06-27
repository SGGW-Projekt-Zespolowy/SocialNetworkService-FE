import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { PostPopUpService } from 'src/app/services/post-pop-up.service';

@Component({
  selector: 'app-post-options-dialog',
  templateUrl: './post-options-dialog.component.html',
  styleUrls: ['./post-options-dialog.component.scss']
})
export class PostOptionsDialogComponent {

  @Input() data: PostModel;
  @Output() toggleFollowingStatus = new EventEmitter();

  constructor(
    public popUpService: PostPopUpService,
  ) {}

  onIsSolvedToggle() {
    this.data.isSolved = !this.data.isSolved;
  }


}
