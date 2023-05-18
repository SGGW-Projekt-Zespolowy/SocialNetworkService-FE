import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppBreakpoints } from 'src/app/app-breakpoints';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  searchBarDisappearSub: Subscription;
  searchBarIsVisible: boolean = true;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.searchBarDisappearSub = this.responsive.observe([
      AppBreakpoints.Small
      ])
      .subscribe(result => {
        this.searchBarIsVisible = true;
        if (result.matches) {
          this.searchBarIsVisible = false;
        }
    });
  }
}
