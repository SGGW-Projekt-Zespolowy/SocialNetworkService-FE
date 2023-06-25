import { Component } from '@angular/core';
import { PostPopUpService } from 'src/app/services/post-pop-up.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AppBreakpoints } from 'src/app/app-breakpoints';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts-section',
  templateUrl: './posts-section.component.html',
  styleUrls: ['./posts-section.component.scss']
})
export class PostsSectionComponent {
  posts = posts;
  isPostDetailsVisible: boolean = false;
  isCreatePostVisible: boolean = true;
  postDetailed: PostModel;
  isAddPostVisible: boolean = false;

  constructor(
    public popUpService: PostPopUpService,
    private responsive: BreakpointObserver
  ) {}

  ngOnInit() {
    this.responsive.observe([AppBreakpoints.Large])
      .subscribe(screen => {
        this.isAddPostVisible = false;
        if(screen.matches) {
          this.isAddPostVisible = true;
        }
      });
  }

  showPostDetails(post) {
    this.isPostDetailsVisible = true;
    this.postDetailed = post;
  }
}

const posts: PostModel[] = [
  {
    title: 'Skok nadciśnienia czaszkowego',
    author: 'Tomasz Budny',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maiores ad eaque, officia dignissimos quasi, omnis dolore cum commodi architecto at exercitationem rem natus temporibus, totam modi. Voluptatum cumque iusto vitae adipisci ut consequuntur, harum odit rerum.',
    rate: 21,
    commentsCount: 69,
    followersCount: 69,
    tags: [
      {content: 'Złamanie', color: 'orange'},
      {content: 'Wylew', color: 'blue'},
      {content: 'Mózg', color: 'purple'},
      {content: 'Złamanie', color: 'purple'},
      {content: 'Biegunka', color: 'blue'},
      {content: 'Nowotwór', color: 'purple'},
      {content: 'Dupy', color: 'orange'},
    ],
    image: 'https://media.istockphoto.com/id/453858187/pl/zdj%C4%99cie/skrzepy-fibrynowe.jpg?s=612x612&w=is&k=20&c=c4J9wyBOZ_mFQ896HePyVDlHBQkErQPA4qXyfqDdj10=',
    verified: true,
    category: 'Neurologia',
    degree: 'Dr n. med.',
    isFollowed: false,
    isUpVoted: true,
    isDownVoted: false,
    creationDate: new Date('June  25, 2023 12:30:00')
  },

  {
    title: 'Przerost mięśnia sercowego',
    author: 'John Doe',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maiores ad eaque, officia dignissimos quasi, omnis dolore cum commodi. , corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus.',
    rate: 361,
    commentsCount: 120,
    followersCount: 2115,
    tags: [
      {content: 'Złamanie', color: 'orange'},
      {content: 'Wylew', color: 'blue'},
    ],
    image: 'https://media.istockphoto.com/id/498761884/pl/zdj%C4%99cie/p%C5%82uc-tk.jpg?s=612x612&w=is&k=20&c=4i2b-TREsWqOCwh3RQLCQljd25arfhYIrjni_PAzvC0=',
    verified: true,
    category: 'Neurologia',
    degree: 'Student',
    isFollowed: true,
    isUpVoted: false,
    isDownVoted: false,
    creationDate: new Date('June  20, 2023 12:30:00')
  },

  {
    title: 'Przeszczep wątroby u cukrzyka',
    author: 'Janek Paweł Wypych',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maiores ad eaque, officia dignissimos quasi, omnis dolore cum commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vitae voluptate vero sunt magnam officiis laboriosam fugit perspiciatis nemo culpa quos consectetur, illo quaerat quibusdam eius architecto id ratione dolores? Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus.',
    rate: 222,
    commentsCount: 15,
    followersCount: 98,
    tags: [
      {content: 'Złamanie', color: 'orange'},
      {content: 'Wylew', color: 'blue'},
    ],
    image: 'https://media.istockphoto.com/id/499285748/pl/zdj%C4%99cie/serca-i-p%C5%82uca-w%C4%85troba-tk.jpg?s=612x612&w=is&k=20&c=EL-6YbOllBN528RFL4_HLz_wz1wsTofukgHPwNZAFuk=',
    verified: false,
    category: 'Kardiologia',
    degree: 'Dr n. med.',
    isFollowed: false,
    isUpVoted: false,
    isDownVoted: false,
    creationDate: new Date('June  18, 2023 12:30:00')
  },

  {
    title: 'Przesz',
    author: 'Jan',
    content: 'Lorem',
    rate: 222,
    commentsCount: 15,
    followersCount: 98,
    tags: [
      {content: 'Złamanie', color: 'orange'},
    ],
    image: 'https://media.istockphoto.com/id/499285748/pl/zdj%C4%99cie/serca-i-p%C5%82uca-w%C4%85troba-tk.jpg?s=612x612&w=is&k=20&c=EL-6YbOllBN528RFL4_HLz_wz1wsTofukgHPwNZAFuk=',
    verified: false,
    category: 'Kardiologia',
    degree: 'Dr n. med.',
    isFollowed: false,
    isUpVoted: false,
    isDownVoted: false,
    creationDate: new Date('June  18, 2021 12:30:00')
  },
]
