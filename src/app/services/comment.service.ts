import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { 
    this.commentsSets =  [
      {postId: '1', comments: this.comments1},
      {postId: '2', comments: this.comments2},
    ]
  }

  getCommentsForPost(id: string) {
    console.log(`comments for post with id: ${id}`)

    let set = this.commentsSets.find(set => set.postId === id);
    if(!set) {
      set = {postId: id, comments: []};
    }

    return of([...set.comments]).pipe(delay(1000));
  }

  commentsSets;

  comments1: CommentModel[] = [
    {
      id: '1',
      authorDegree: 'Student',
      authorName: 'Tomasz Budny',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati.',
  
      authorAvatar: 'https://i.ytimg.com/vi/V8f-1olyC1s/maxresdefault.jpg',
      authorId: '1',
      isHelpful: false,
    },
  
    {
      id: '2',
      authorDegree: 'Student',
      authorName: 'Kowal Pawelczyk',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi! repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi!',
  
      authorAvatar: 'https://img.freepik.com/free-photo/portrait-black-man-isolated_53876-40305.jpg',
      authorId: '1',
      isHelpful: true,
    },
  
    {
      id: '3',
      authorDegree: 'Dr n. med.',
      authorName: 'janek Paweł Wypych',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi!',
  
      authorAvatar: 'https://thumbs.dreamstime.com/b/lekarz-medycyny-z-pastylkami-27402514.jpg',
      authorId: '1',
      isHelpful: false,
    },
  ];

  comments2: CommentModel[] = [
    {
      id: '1',
      authorDegree: 'Student',
      authorName: 'Tomasz Budny',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati.',
  
      authorAvatar: 'https://i.ytimg.com/vi/V8f-1olyC1s/maxresdefault.jpg',
      authorId: '1',
      isHelpful: false,
    },
  
    {
      id: '2',
      authorDegree: 'Student',
      authorName: 'Kowal Pawelczyk',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi! repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi!',
  
      authorAvatar: 'https://img.freepik.com/free-photo/portrait-black-man-isolated_53876-40305.jpg',
      authorId: '1',
      isHelpful: true,
    },
  
    {
      id: '3',
      authorDegree: 'Dr n. med.',
      authorName: 'janek Paweł Wypych',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi!',
  
      authorAvatar: 'https://thumbs.dreamstime.com/b/lekarz-medycyny-z-pastylkami-27402514.jpg',
      authorId: '1',
      isHelpful: false,
    },
  ];
}
