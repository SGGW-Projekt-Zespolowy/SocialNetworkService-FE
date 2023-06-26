import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-detailed',
  templateUrl: './post-detailed.component.html',
  styleUrls: ['./post-detailed.component.scss'],
})
export class PostDetailedComponent {
   @Input() data: PostModel;

}