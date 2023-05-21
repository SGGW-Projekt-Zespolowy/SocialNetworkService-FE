import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-phone-view',
  templateUrl: './search-phone-view.component.html',
  styleUrls: ['./search-phone-view.component.scss']
})
export class SearchPhoneViewComponent {

  @Output() close = new EventEmitter<boolean>()
}
