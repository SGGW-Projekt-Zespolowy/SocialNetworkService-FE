import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  controlIsVisible: boolean = true;
  friendsIsVisible: boolean = true;

  controlDisapearBreakpoint: string = `(max-width: 1300px)`;
  friendsDisapearBreakpoint: string = `(max-width: 900px)`;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.responsive.observe([
      this.controlDisapearBreakpoint
      ])
      .subscribe(result => {
        this.controlIsVisible = true;
        if (result.matches) {
          this.controlIsVisible = false;
        }
    });

    this.responsive.observe([
      this.friendsDisapearBreakpoint
      ])
      .subscribe(result => {
        this.friendsIsVisible = true;
        if (result.matches) {
          this.friendsIsVisible = false;
        }
    });
  }
}
