import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { PostPopUpService } from '../services/post-pop-up.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  constructor(
    public popUpService: PostPopUpService,
    protected postService: PostService,
  ) {}

  selectedTab: string;

  ngOnInit() {
    const storedTab = localStorage.getItem('selectedTab');
    if (storedTab) {
      this.selectedTab = storedTab; 
    } else {
      this.selectedTab = 'posty';
    }
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    localStorage.setItem('selectedTab', tab);
  }
}
