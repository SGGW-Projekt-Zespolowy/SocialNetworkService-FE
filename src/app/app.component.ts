import { Component, OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private iconReg: SvgIconRegistryService,
    private authService: AuthService
  ) { 
    
  }

  ngOnInit(): void {
    this.iconReg.loadSvg('../assets/Icons/test-icon.svg', 'test').subscribe();

    this.iconReg.loadSvg('../assets/Icons/sort-up.svg', 'sort-up').subscribe();

    this.iconReg.loadSvg('../assets/Icons/sort-down.svg', 'sort-down').subscribe();

    this.iconReg.loadSvg('../assets/Icons/eye.svg', 'eye').subscribe();

    this.iconReg.loadSvg('../assets/Icons/Speech.svg', 'comment').subscribe();

    this.iconReg.loadSvg('../assets/Icons/bookmark.svg', 'bookmark').subscribe();

    this.iconReg.loadSvg('../assets/Icons/home.svg', 'home').subscribe();

    this.iconReg.loadSvg('../assets/Icons/hossa.svg', 'hossa').subscribe();

    this.iconReg.loadSvg('../assets/Icons/message-1.svg', 'message-1').subscribe();

    this.iconReg.loadSvg('../assets/Icons/bookmark-2.svg', 'bookmark-2').subscribe();

    this.iconReg.loadSvg('../assets/Icons/message-plus.svg', 'message-plus').subscribe();

    this.iconReg.loadSvg('../assets/Icons/loop.svg', 'loop').subscribe();

    this.iconReg.loadSvg('../assets/Icons/sign-out.svg', 'sign-out').subscribe();

    this.iconReg.loadSvg('../assets/Icons/user.svg', 'profile').subscribe();

    this.iconReg.loadSvg('../assets/Icons/messages.svg', 'messages').subscribe();

    this.iconReg.loadSvg('../assets/Icons/loop-white.svg', 'loop-white').subscribe();

    this.iconReg.loadSvg('../assets/Icons/bookmark2.svg', 'bookmark2').subscribe();

    this.iconReg.loadSvg('../assets/Icons/verified.svg', 'verified').subscribe();

    this.iconReg.loadSvg('../assets/Icons/unverified.svg', 'unverified').subscribe();

    this.iconReg.loadSvg('../assets/Icons/sort-down-clicked.svg', 'sort-down-clicked').subscribe();

    this.iconReg.loadSvg('../assets/Icons/cancel.svg', 'cancel').subscribe();

    this.iconReg.loadSvg('../assets/Icons/add.svg', 'add').subscribe();

    this.iconReg.loadSvg('../assets/Icons/delete.svg', 'delete').subscribe();
  }
}
