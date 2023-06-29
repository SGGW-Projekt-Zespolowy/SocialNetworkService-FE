import { Component } from '@angular/core';
import { PostPopUpService } from 'src/app/services/post-pop-up.service';
import { PostService } from 'src/app/services/post.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AppBreakpoints } from 'src/app/app-breakpoints';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-user-profile-posts',
  templateUrl: './user-profile-posts.component.html',
  styleUrls: ['./user-profile-posts.component.scss']
})
export class UserProfilePostsComponent {

  isAddPostVisible: boolean = false;
  isPostDetailsVisible: boolean = false;
  postDetailed: PostModel;

  constructor(
    public popUpService: PostPopUpService,
    protected postService: PostService,
    private responsive: BreakpointObserver
  ) {}

  ngOnInit() {
    this.responsive.observe([AppBreakpoints.Medium])
      .subscribe(screen => {
        this.isAddPostVisible = false;
        if(screen.matches) {
          this.isAddPostVisible = true;
        }
    });
  }

  showPostDetails(post: PostModel) {
    this.isPostDetailsVisible = true;
    this.postDetailed = post;
  }

}
