import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[PopUp]'
})
export class PopUpDirective implements OnInit, OnDestroy {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    document.body.classList.add('block-scrolling');
  }

  ngOnDestroy() {
    document.body.classList.remove('block-scrolling');
  }
}
