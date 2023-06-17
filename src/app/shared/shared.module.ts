import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBarInputComponent } from './search-bar-input/search-bar-input.component';
import { SearchPhoneViewComponent } from './search-phone-view/search-phone-view.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PopUpDirective } from './directives/pop-up.directive';

@NgModule({
  declarations: [
    DropdownInputComponent,
    NavbarComponent,
    SearchBarComponent,
    SearchBarInputComponent,
    SearchPhoneViewComponent,
    PopUpDirective
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    PopUpDirective,
    DropdownInputComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
