import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppBreakpoints } from '../app-breakpoints';
import { Subscription } from 'rxjs';
import { PostPopUpService } from '../services/post-pop-up.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  controlIsVisible: boolean = true;
  friendsIsVisible: boolean = true;

  controlDisapearSub: Subscription
  friendsDisapearSub: Subscription

  constructor(
    private responsive: BreakpointObserver,
    public popUpService: PostPopUpService
  ) {}

  ngOnInit(): void {
    this.controlDisapearSub = this.responsive.observe([
      AppBreakpoints.Medium
      ])
      .subscribe(result => {
        this.controlIsVisible = true;
        if (result.matches) {
          this.controlIsVisible = false;
        }
    });

    this.friendsDisapearSub = this.responsive.observe([
      AppBreakpoints.Large
      ])
      .subscribe(result => {
        this.friendsIsVisible = true;
        if (result.matches) {
          this.friendsIsVisible = false;
        }
    });
  }

  ngOnDestroy(): void {
    this.controlDisapearSub.unsubscribe();
    this.friendsDisapearSub.unsubscribe();
  }
}
