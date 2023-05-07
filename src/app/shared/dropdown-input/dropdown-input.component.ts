import { Component, Input } from '@angular/core';
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

  selectTitle(title: string) {
    this.selectedTitle = title;
    this.isOpen = false;
  }
}
