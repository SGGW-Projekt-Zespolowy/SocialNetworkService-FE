import { Component } from '@angular/core';
import { PostModel } from './post/post.component';

@Component({
  selector: 'app-posts-section',
  templateUrl: './posts-section.component.html',
  styleUrls: ['./posts-section.component.scss']
})
export class PostsSectionComponent {

  firstPost: PostModel = {
    title: 'Skok nadciśnienia czaszkowego',
    author: 'Dr n. med. Tomasz Budny',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maiores ad eaque, officia dignissimos quasi, omnis dolore cum commodi architecto at exercitationem rem natus temporibus, totam modi. Voluptatum cumque iusto vitae adipisci ut consequuntur, harum odit rerum.',
    rate: 21,
    commentsCount: 69,
    followersCount: 69,
    tags: [
      {content: 'Złamanie', color: 'orange'},
      {content: 'Wylew', color: 'blue'},
      {content: 'Mózg', color: 'purple'}
    ]
  }
}
