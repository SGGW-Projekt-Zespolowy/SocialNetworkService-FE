import { Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent {
  showDropdown = false;

  constructor(private renderer: Renderer2) { }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}


