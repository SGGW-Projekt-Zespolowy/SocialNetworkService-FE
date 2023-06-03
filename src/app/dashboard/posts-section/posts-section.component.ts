import { Component } from '@angular/core';
import { PostModel } from './post/post.component';

@Component({
  selector: 'app-posts-section',
  templateUrl: './posts-section.component.html',
  styleUrls: ['./posts-section.component.scss']
})
export class PostsSectionComponent {
  posts = posts;
}

const posts = [
  {
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
  },

  {
    title: 'Przerost mięśnia sercowego',
    author: 'Dr n. med. Tomasz Budny',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maiores ad eaque, officia dignissimos quasi, omnis dolore cum commodi.',
    rate: 361,
    commentsCount: 120,
    followersCount: 2115,
    tags: [
      {content: 'Złamanie', color: 'orange'},
      {content: 'Wylew', color: 'blue'},
    ]
  },

  {
    title: 'Przeszczep wątroby u cukrzyka',
    author: 'Dr n. med. Janek Paweł Wypych',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maiores ad eaque, officia dignissimos quasi, omnis dolore cum commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vitae voluptate vero sunt magnam officiis laboriosam fugit perspiciatis nemo culpa quos consectetur, illo quaerat quibusdam eius architecto id ratione dolores? Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus.',
    rate: 222,
    commentsCount: 15,
    followersCount: 98,
    tags: [
      {content: 'Złamanie', color: 'orange'},
      {content: 'Wylew', color: 'blue'},
    ]
  },
]
