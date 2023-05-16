import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AppBreakpoints } from '../custom-breakpoints';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  controlIsVisible: boolean = true;
  friendsIsVisible: boolean = true;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.responsive.observe([
      AppBreakpoints.controlDisapearBreakpoint
      ])
      .subscribe(result => {
        this.controlIsVisible = true;
        if (result.matches) {
          this.controlIsVisible = false;
        }
    });

    this.responsive.observe([
      AppBreakpoints.friendsDisapearBreakpoint
      ])
      .subscribe(result => {
        this.friendsIsVisible = true;
        if (result.matches) {
          this.friendsIsVisible = false;
        }
    });
  }
}
