import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent {

  showDropdown = false;

  constructor(private renderer: Renderer2) { }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

}
