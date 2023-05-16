import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppBreakpoints } from '../custom-breakpoints';
import { Subscription } from 'rxjs';

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

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.controlDisapearSub = this.responsive.observe([
      AppBreakpoints.controlDisapearBreakpoint
      ])
      .subscribe(result => {
        this.controlIsVisible = true;
        if (result.matches) {
          this.controlIsVisible = false;
        }
    });

    this.friendsDisapearSub = this.responsive.observe([
      AppBreakpoints.friendsDisapearBreakpoint
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
