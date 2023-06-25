import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isProfileDetailsVisible: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
  }

  showProfileDetails() {
    this.isProfileDetailsVisible = true;
  }

  hideProfileDetails() {
    this.isProfileDetailsVisible = false;
  }
}
