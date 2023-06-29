import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of } from 'rxjs';
import { PostEditModel, PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: BehaviorSubject<PostModel[]>;

  constructor() { 
    this.posts = new BehaviorSubject<PostModel[]>(this.postsData);
  }

  getPosts() {
    return this.posts.asObservable();
  }

  addPost(post: PostModel) {
    return this.posts.next([post, ...this.posts.value]);
  }

  removePost(postToRemove: PostModel) {
    this.posts.next(
      [...this.posts.value
        .filter(post => post !== postToRemove)
      ]
    );
  }

  editPost(postToEdit: PostModel, eidtedPost: PostEditModel) {
    // let post = this.posts.value.find(post => post === postToEdit);
    const index = this.posts.value.findIndex(post => post === postToEdit);
    const post = {
      ...postToEdit,
      ...eidtedPost
    }
    this.posts.value[index] = post;
    this.posts.next(this.posts.value);
  }

  postsData = [
    {
      id: "1",
      authorId: "1",
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
      images: ['https://media.istockphoto.com/id/453858187/pl/zdj%C4%99cie/skrzepy-fibrynowe.jpg?s=612x612&w=is&k=20&c=c4J9wyBOZ_mFQ896HePyVDlHBQkErQPA4qXyfqDdj10=',

      'https://media.istockphoto.com/id/498761884/pl/zdj%C4%99cie/p%C5%82uc-tk.jpg?s=612x612&w=is&k=20&c=4i2b-TREsWqOCwh3RQLCQljd25arfhYIrjni_PAzvC0='],
      verified: true,
      category: 'Neurologia',
      degree: 'DrHab',
      isFollowed: false,
      isUpVoted: true,
      isDownVoted: false,
      creationDate: new Date('June  25, 2023 12:30:00'),
      isSolved: false
    },
  
    {
      id: "1",
      authorId: "1",
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
      images: ['https://media.istockphoto.com/id/498761884/pl/zdj%C4%99cie/p%C5%82uc-tk.jpg?s=612x612&w=is&k=20&c=4i2b-TREsWqOCwh3RQLCQljd25arfhYIrjni_PAzvC0='],
      verified: true,
      category: 'Neurologia',
      degree: 'Student',
      isFollowed: true,
      isUpVoted: false,
      isDownVoted: false,
      creationDate: new Date('June  20, 2023 12:30:00'),
      isSolved: false
    },
  
    {
      id: "1",
      authorId: "f6e2d04a-0524-485b-e7ad-08db7590bc89",
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
      images: ['https://media.istockphoto.com/id/499285748/pl/zdj%C4%99cie/serca-i-p%C5%82uca-w%C4%85troba-tk.jpg?s=612x612&w=is&k=20&c=EL-6YbOllBN528RFL4_HLz_wz1wsTofukgHPwNZAFuk='],
      verified: false,
      category: 'Kardiologia',
      degree: 'Spec',
      isFollowed: false,
      isUpVoted: false,
      isDownVoted: false,
      creationDate: new Date('June  18, 2023 12:30:00'),
      isSolved: true
    },
  
    {
      id: "1",
      authorId: "1",
      title: 'Przesz',
      author: 'Jan',
      content: 'Lorem lores? Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus.',
      rate: 222,
      commentsCount: 15,
      followersCount: 98,
      tags: [
        {content: 'Złamanie', color: 'orange'},
      ],
      images: ['https://media.istockphoto.com/id/499285748/pl/zdj%C4%99cie/serca-i-p%C5%82uca-w%C4%85troba-tk.jpg?s=612x612&w=is&k=20&c=EL-6YbOllBN528RFL4_HLz_wz1wsTofukgHPwNZAFuk='],
      verified: false,
      category: 'Kardiologia',
      degree: 'Spec',
      isFollowed: false,
      isUpVoted: false,
      isDownVoted: false,
      creationDate: new Date('June  18, 2021 12:30:00'),
      isSolved: false
    },


    {
      id: "1",
      authorId: "1",
      title: 'Pryszcze',
      author: 'Jan',
      content: 'Obskórny lores? Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus.',
      rate: 222,
      commentsCount: 115,
      followersCount: 98,
      tags: [
        {content: 'Pryszcz', color: 'blue'},
      ],
      images: ['https://media.istockphoto.com/id/499285748/pl/zdj%C4%99cie/serca-i-p%C5%82uca-w%C4%85troba-tk.jpg?s=612x612&w=is&k=20&c=EL-6YbOllBN528RFL4_HLz_wz1wsTofukgHPwNZAFuk=',
      'data:image/jpeg;base64,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'],
      verified: false,
      category: 'Kardiologia',
      degree: 'DrHab',
      isFollowed: false,
      isUpVoted: false,
      isDownVoted: false,
      creationDate: new Date('March 21, 2021 09:30:00'),
      isSolved: false
    },


    {
      id: "1",
      authorId: "1",
      title: 'Kostek',
      author: 'Krzysiek Kostek',
      content: 'Lorem lores? Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus.',
      rate: 252,
      commentsCount: 11,
      followersCount: 108,
      tags: [
        {content: 'Kostek', color: 'orange'},
		    {content: 'Osteoporoza', color: 'purple'},
      ],
      images: ['https://media.istockphoto.com/id/499285748/pl/zdj%C4%99cie/serca-i-p%C5%82uca-w%C4%85troba-tk.jpg?s=612x612&w=is&k=20&c=EL-6YbOllBN528RFL4_HLz_wz1wsTofukgHPwNZAFuk='
      ,'https://post.healthline.com/wp-content/uploads/2020/08/woman_cancer-732x549-thumbnail-732x549.jpg'],
      verified: false,
      category: 'Seksuologia',
      degree: 'Spec',
      isFollowed: true,
      isUpVoted: true,
      isDownVoted: false,
      creationDate: new Date('January 13, 2021 21:30:00'),
      isSolved: false
    },

    {
      id: "1",
      authorId: "1",
      title: 'Skóra',
      author: 'Kinga Nieskóra',
      content: 'Jak UV wpływa na naszą skórę?? lores? Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus.',
      rate: 10,
      commentsCount: 41,
      followersCount: 48,
      tags: [
        {content: 'Skóra', color: 'orange'},
		{content: 'ręka', color: 'blue'},
      ],
      images: ['https://media.istockphoto.com/id/453858187/pl/zdj%C4%99cie/skrzepy-fibrynowe.jpg?s=612x612&w=is&k=20&c=c4J9wyBOZ_mFQ896HePyVDlHBQkErQPA4qXyfqDdj10=',

      'https://media.istockphoto.com/id/498761884/pl/zdj%C4%99cie/p%C5%82uc-tk.jpg?s=612x612&w=is&k=20&c=4i2b-TREsWqOCwh3RQLCQljd25arfhYIrjni_PAzvC0='],
      verified: true,
      category: 'Endokrynologia',
      degree: 'Dr',
      isFollowed: true,
      isUpVoted: true,
      isDownVoted: false,
      creationDate: new Date('May 10, 2021 19:30:00'),
      isSolved: false
    },

    {
      id: "1",
      authorId: "1",
      title: 'HIV - czy można się tym zarazić ?',
      author: 'Ben Dover',
      content: 'nie- raczej nie. lores? Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus.',
      rate: 120,
      commentsCount: 14,
      followersCount: 12,
      tags: [
        {content: 'HIV', color: 'orange'},
		    {content: 'seks', color: 'purple'},
      ],
      images: ['https://media.istockphoto.com/id/453858187/pl/zdj%C4%99cie/skrzepy-fibrynowe.jpg?s=612x612&w=is&k=20&c=c4J9wyBOZ_mFQ896HePyVDlHBQkErQPA4qXyfqDdj10=',

      'https://media.istockphoto.com/id/498761884/pl/zdj%C4%99cie/p%C5%82uc-tk.jpg?s=612x612&w=is&k=20&c=4i2b-TREsWqOCwh3RQLCQljd25arfhYIrjni_PAzvC0='],
      verified: false	,
      category: 'ChorobyZakazne',
      degree: 'Dr',
      isFollowed: true,
      isUpVoted: false,
      isDownVoted: true,
      creationDate: new Date('June  01, 2021 03:54:00'),
      isSolved: false
    },

    {
      id: "1",
      authorId: "1",
      title: 'Cukrzyca Typu 2',
      author: 'Sugar Dave',
      content: 'jest taki typ cukrzycy. Jest on bardzo groźny dla życia ludzkiego. lores? Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus.',
      rate: 21,
      commentsCount: 1,
      followersCount: 4,
      tags: [
        {content: 'cukrzyca', color: 'orange'},
		{content: 'choroba', color: 'blue'},
      ],
      images: ['https://media.istockphoto.com/id/453858187/pl/zdj%C4%99cie/skrzepy-fibrynowe.jpg?s=612x612&w=is&k=20&c=c4J9wyBOZ_mFQ896HePyVDlHBQkErQPA4qXyfqDdj10=',

      'https://media.istockphoto.com/id/498761884/pl/zdj%C4%99cie/p%C5%82uc-tk.jpg?s=612x612&w=is&k=20&c=4i2b-TREsWqOCwh3RQLCQljd25arfhYIrjni_PAzvC0='],
      verified: false	,
      category: 'Pediatria',
      degree: 'Student',
      isFollowed: false,
      isUpVoted: false,
      isDownVoted: true,
      creationDate: new Date('June  12, 2023 16:54:00'),
      isSolved: true
    },

    {
      id: "1",
      authorId: "1",
      title: 'Mój Pacjent nie potrafi wstać z łóżka',
      author: 'Justyna Krzywopał',
      content: 'Mój pacjent ma duży problem z kręgosłupem i nie może samemu wstać z łóżka. Co mam zrobić ? lores? Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus. Blanditiis id aut iste quas eligendi. Similique dolor, corporis non placeat fugiat cum quia? Deserunt molestiae ipsam sint distinctio possimus.',
      rate: 122,
      commentsCount: 123,
      followersCount: 10,
      tags: [
        {content: 'kręgosłup', color: 'blue'},
		    {content: 'krzywizna', color: 'purple'},
      ],
      images: ['https://media.istockphoto.com/id/453858187/pl/zdj%C4%99cie/skrzepy-fibrynowe.jpg?s=612x612&w=is&k=20&c=c4J9wyBOZ_mFQ896HePyVDlHBQkErQPA4qXyfqDdj10=',

      'https://media.istockphoto.com/id/498761884/pl/zdj%C4%99cie/p%C5%82uc-tk.jpg?s=612x612&w=is&k=20&c=4i2b-TREsWqOCwh3RQLCQljd25arfhYIrjni_PAzvC0='],
      verified: false	,
      category: 'Geriatria',
      degree: 'Spec',
      isFollowed: false,
      isUpVoted: false,
      isDownVoted: true,
      creationDate: new Date('December  15, 2022 11:54:00'),
      isSolved: true
    },
  ]
}
