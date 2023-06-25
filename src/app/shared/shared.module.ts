import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBarInputComponent } from './search-bar-input/search-bar-input.component';
import { SearchPhoneViewComponent } from './search-phone-view/search-phone-view.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PopUpDirective } from './directives/pop-up.directive';
import { PopUpComponent } from './pop-up/pop-up.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { RoundedDatePipe } from './pipes/rounded-date.pipe';
import { RouterModule } from '@angular/router';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@NgModule({
  declarations: [
    DropdownInputComponent,
    NavbarComponent,
    SearchBarComponent,
    SearchBarInputComponent,
    SearchPhoneViewComponent,
    PopUpDirective,
    PopUpComponent,
    SafeUrlPipe,
    RoundedDatePipe,
    UserDialogComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    RouterModule,
  ],
  exports: [
    PopUpDirective,
    DropdownInputComponent,
    NavbarComponent,
    PopUpComponent,
    SafeUrlPipe,
    RoundedDatePipe
  ]
})
export class SharedModule { }
