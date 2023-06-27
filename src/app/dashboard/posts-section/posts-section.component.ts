import { Component } from '@angular/core';
import { PostPopUpService } from 'src/app/services/post-pop-up.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AppBreakpoints } from 'src/app/app-breakpoints';
import { PostModel } from 'src/app/models/post.model';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts-section',
  templateUrl: './posts-section.component.html',
  styleUrls: ['./posts-section.component.scss']
})
export class PostsSectionComponent {
  posts: Observable<PostModel[]>;
  isPostDetailsVisible: boolean = false;
  isCreatePostVisible: boolean = true;
  postDetailed: PostModel;
  isAddPostVisible: boolean = false;

  constructor(
    public popUpService: PostPopUpService,
    private responsive: BreakpointObserver,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.responsive.observe([AppBreakpoints.Medium])
      .subscribe(screen => {
        this.isAddPostVisible = false;
        if(screen.matches) {
          this.isAddPostVisible = true;
        }
    });

    this.posts = this.postService.getPosts();
  }

  showPostDetails(post: PostModel) {
    this.isPostDetailsVisible = true;
    this.postDetailed = post;
  }
}