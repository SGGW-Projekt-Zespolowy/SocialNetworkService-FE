import { Component, OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private iconReg: SvgIconRegistryService) { }

  ngOnInit(): void {
    this.iconReg.loadSvg('../assets/Icons/test-icon.svg', 'test').subscribe();
  }
}
