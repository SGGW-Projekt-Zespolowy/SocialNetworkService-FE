import { Component, HostListener, Input } from '@angular/core';
import { DropDownAnimation } from './animations';

@Component({
  selector: 'dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss'],
  animations: [DropDownAnimation],
})

export class DropdownInputComponent {

  isOpen = false;
  
  @Input() titles;
  
  selectedTitle: string;

  inside = false;

  @HostListener("click")
  clicked() {
    this.inside = true;
  }
  @HostListener("document:click")
  clickedOut() {
    if(!this.inside) {
      this.isOpen = false;
    }
    this.inside = false;
  }

  selectTitle(title: string) {
    this.selectedTitle = title;
    this.isOpen = false;
  }
}
