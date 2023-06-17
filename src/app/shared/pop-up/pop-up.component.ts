import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  @Output() close = new EventEmitter<boolean>;

  @ViewChild('content') content: ElementRef; ElementRef;

  @HostListener('click', ['$event'])
  clickout(event) {
    if(event.target === this.content.nativeElement) {
      this.close.emit(true)
    }
  }
}
