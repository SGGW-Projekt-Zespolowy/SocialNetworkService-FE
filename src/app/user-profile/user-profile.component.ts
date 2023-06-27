import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  constructor(
    protected postService: PostService
  ) {}

  selectedTab: string;

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
