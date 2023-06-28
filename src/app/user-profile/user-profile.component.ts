import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { PostPopUpService } from '../services/post-pop-up.service';
import { ConfirmModalService } from '../services/confirm-modal.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  constructor(
    public popUpService: PostPopUpService,
    protected postService: PostService,
    public confirmModalService: ConfirmModalService
  ) {}

  selectedTab: string;

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
