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
        {content: 'Pryszcz', color: 'trądzik'},
      ],
      images: ['https://media.istockphoto.com/id/499285748/pl/zdj%C4%99cie/serca-i-p%C5%82uca-w%C4%85troba-tk.jpg?s=612x612&w=is&k=20&c=EL-6YbOllBN528RFL4_HLz_wz1wsTofukgHPwNZAFuk='
				,'https://www.medonet.pl/zdrowie/zdrowie-dla-kazdego,mozg-wyhodowany-ze-skory,artykul,1657025.html'],
      verified: false,
      category: 'Kardiologia',
      degree: 'Prof. Dr Hab.',
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
        {content: 'Kostek', color: 'white'},
		{content: 'Osteoporoza', color: 'grey'},
      ],
      images: ['https://media.istockphoto.com/id/499285748/pl/zdj%C4%99cie/serca-i-p%C5%82uca-w%C4%85troba-tk.jpg?s=612x612&w=is&k=20&c=EL-6YbOllBN528RFL4_HLz_wz1wsTofukgHPwNZAFuk='
				,'https://www.medonet.pl/zdrowie/zdrowie-dla-kazdego,mozg-wyhodowany-ze-skory,artykul,1657025.html'],
      verified: false,
      category: 'Ortopedia',
      degree: 'Lek Spec.',
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
		{content: 'ręka', color: 'yellow'},
      ],
      images: ['https://media.istockphoto.com/id/453858187/pl/zdj%C4%99cie/skrzepy-fibrynowe.jpg?s=612x612&w=is&k=20&c=c4J9wyBOZ_mFQ896HePyVDlHBQkErQPA4qXyfqDdj10=',

      'https://media.istockphoto.com/id/498761884/pl/zdj%C4%99cie/p%C5%82uc-tk.jpg?s=612x612&w=is&k=20&c=4i2b-TREsWqOCwh3RQLCQljd25arfhYIrjni_PAzvC0='],
      verified: true,
      category: 'Dermatologia I Wenerologia',
      degree: 'Dr n. med.',
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
        {content: 'HIV', color: 'red'},
		{content: 'seks', color: 'purple'},
      ],
      images: ['https://media.istockphoto.com/id/453858187/pl/zdj%C4%99cie/skrzepy-fibrynowe.jpg?s=612x612&w=is&k=20&c=c4J9wyBOZ_mFQ896HePyVDlHBQkErQPA4qXyfqDdj10=',

      'https://media.istockphoto.com/id/498761884/pl/zdj%C4%99cie/p%C5%82uc-tk.jpg?s=612x612&w=is&k=20&c=4i2b-TREsWqOCwh3RQLCQljd25arfhYIrjni_PAzvC0='],
      verified: false	,
      category: 'Dermatologia I Wenerologia',
      degree: 'Dr n. med.',
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
        {content: 'cukrzyca', color: 'green'},
		{content: 'choroba', color: 'brown'},
      ],
      images: ['https://media.istockphoto.com/id/453858187/pl/zdj%C4%99cie/skrzepy-fibrynowe.jpg?s=612x612&w=is&k=20&c=c4J9wyBOZ_mFQ896HePyVDlHBQkErQPA4qXyfqDdj10=',

      'https://media.istockphoto.com/id/498761884/pl/zdj%C4%99cie/p%C5%82uc-tk.jpg?s=612x612&w=is&k=20&c=4i2b-TREsWqOCwh3RQLCQljd25arfhYIrjni_PAzvC0='],
      verified: false	,
      category: 'Diabetologia',
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
        {content: 'kręgosłup', color: 'green'},
		{content: 'krzywizna', color: 'blue'},
      ],
      images: ['https://media.istockphoto.com/id/453858187/pl/zdj%C4%99cie/skrzepy-fibrynowe.jpg?s=612x612&w=is&k=20&c=c4J9wyBOZ_mFQ896HePyVDlHBQkErQPA4qXyfqDdj10=',

      'https://media.istockphoto.com/id/498761884/pl/zdj%C4%99cie/p%C5%82uc-tk.jpg?s=612x612&w=is&k=20&c=4i2b-TREsWqOCwh3RQLCQljd25arfhYIrjni_PAzvC0='],
      verified: false	,
      category: 'Ortopedia',
      degree: 'Lek. Spec.',
      isFollowed: false,
      isUpVoted: false,
      isDownVoted: true,
      creationDate: new Date('December  15, 2022 11:54:00'),
      isSolved: true
    },
  ]
}
