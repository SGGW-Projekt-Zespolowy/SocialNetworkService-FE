import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { PostPopUpService } from '../services/post-pop-up.service';
import { ConfirmModalService } from '../services/confirm-modal.service';
import { ActivatedRoute } from '@angular/router';
import { UserDetailed } from '../models/user.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  constructor(
    public popUpService: PostPopUpService,
    protected postService: PostService,
    public confirmModalService: ConfirmModalService,
    private activatedRoute: ActivatedRoute
  ) {}

  userDetailed$: Observable<UserDetailed>;
  selectedTab: string;

  ngOnInit() {

    this.userDetailed$ = this.activatedRoute.data.pipe(map(data => {
      return data['userDetailed'];
    }))

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
