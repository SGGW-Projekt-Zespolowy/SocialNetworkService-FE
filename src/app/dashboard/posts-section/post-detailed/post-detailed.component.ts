import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-detailed',
  templateUrl: './post-detailed.component.html',
  styleUrls: ['./post-detailed.component.scss'],
})
export class PostDetailedComponent {
  @Output() close = new EventEmitter<boolean>;
  @Input() data;

  @ViewChild('content') content: ElementRef; ElementRef;

  @HostListener('click', ['$event'])
  clickout(event) {
    if(event.target === this.content.nativeElement) {
      this.close.emit(true)
    }
  }
}

const post = {
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
  degree: 'Dr n. med.'
};
