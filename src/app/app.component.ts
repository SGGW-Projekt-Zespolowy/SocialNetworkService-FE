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

    this.iconReg.loadSvg('../assets/Icons/mail.svg', 'mail').subscribe();

    this.iconReg.loadSvg('../assets/Icons/mark-as-helpful.svg', 'mark-as-helpful').subscribe();

    this.iconReg.loadSvg('../assets/Icons/helpful.svg', 'helpful').subscribe();

    this.iconReg.loadSvg('../assets/Icons/bin.svg', 'bin').subscribe();

    this.iconReg.loadSvg('../assets/Icons/options.svg', 'options').subscribe();

    this.iconReg.loadSvg('../assets/Icons/edit.svg', 'edit').subscribe();

    this.iconReg.loadSvg('../assets/Icons/solved.svg', 'solved').subscribe();

    this.iconReg.loadSvg('../assets/Icons/drop-down-arrow.svg', 'drop-down-arrow').subscribe();

    this.iconReg.loadSvg('../assets/Icons/drop-up-arrow.svg', 'drop-up-arrow').subscribe();

    this.iconReg.loadSvg('../assets/Icons/instagram.svg', 'instagram').subscribe();

    this.iconReg.loadSvg('../assets/Icons/location.svg', 'location').subscribe();

    this.iconReg.loadSvg('../assets/Icons/message-profile.svg', 'message-profile').subscribe();

    this.iconReg.loadSvg('../assets/Icons/phone-profile.svg', 'phone').subscribe();

    this.iconReg.loadSvg('../assets/Icons/medical-s.svg', 'medical').subscribe();

    this.iconReg.loadSvg('../assets/Icons/dots.svg', 'dots').subscribe();

    this.iconReg.loadSvg('../assets/Icons/invite.svg', 'invite').subscribe();
  }
}
