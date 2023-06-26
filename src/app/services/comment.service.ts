import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  getCommentForPost(id: string) {
    console.log(`comments for post with id: ${id}`)
    return of([...this.comments]).pipe(delay(1000));
  }

  comments: CommentModel[] = [
    {
      id: '1',
      opTitle: 'Student',
      opName: 'Tomasz Budny',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati.',
  
      opAvatar: 'https://i.ytimg.com/vi/V8f-1olyC1s/maxresdefault.jpg',
      authorId: '1'
    },
  
    {
      id: '2',
      opTitle: 'Student',
      opName: 'Kowal Pawelczyk',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi! repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi!',
  
      opAvatar: 'https://img.freepik.com/free-photo/portrait-black-man-isolated_53876-40305.jpg',
      authorId: '1'
    },
  
    {
      id: '3',
      opTitle: 'Dr n. med.',
      opName: 'janek Paweł Wypych',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi!',
  
      opAvatar: 'https://thumbs.dreamstime.com/b/lekarz-medycyny-z-pastylkami-27402514.jpg',
      authorId: '1'
    },
  ];
}