import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  selectedTab: string;

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
