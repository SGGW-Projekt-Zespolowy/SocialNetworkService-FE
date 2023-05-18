import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppBreakpoints } from 'src/app/app-breakpoints';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  searchToggleSub: Subscription;
  searchBarIsVisible: boolean = true;
  searchIconIsVisible: boolean = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.searchToggleSub = this.responsive.observe([
      AppBreakpoints.Small
      ])
      .subscribe(result => {
        this.searchBarIsVisible = true;
        this.searchIconIsVisible = false;

        if (result.matches) {
          this.searchBarIsVisible = false;
          this.searchIconIsVisible = true;
        }
    });
  }

  ngOnDestroy(): void {
    this.searchToggleSub.unsubscribe();
  }
}
