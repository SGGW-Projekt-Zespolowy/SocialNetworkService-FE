import { Component } from '@angular/core';
import { CommentModel } from '../post-detailed/post-comments-section/post-comment/post-comment.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  comments = comments;
}

const comments: CommentModel[] = [
  {
    opTitle: 'Student',
    opName: 'Tomasz Budny',
    content: 'Lorem, ',

    opAvatar: 'https://i.ytimg.com/vi/V8f-1olyC1s/maxresdefault.jpg'
  },

  {
    opTitle: 'Student',
    opName: 'Kowal Pawelczyk',
    content: 'Lorem, ',

    opAvatar: 'https://img.freepik.com/free-photo/portrait-black-man-isolated_53876-40305.jpg'
  },

  {
    opTitle: 'Dr n. med.',
    opName: 'janek Paweł Wypych',
    content: 'Lorem,',

    opAvatar: 'https://thumbs.dreamstime.com/b/lekarz-medycyny-z-pastylkami-27402514.jpg'
  },
];
